<template>
   <div class="mt-10">
      <form @submit.prevent>
         <!-- Sign up/in -->
         <Card class="max-w-xl p-12 w-full mx-auto" v-if="!showMagicInputCode">
            <template #title>
               <h1 class="h1">{{ pageAuthType }}</h1>
            </template>

            <template #content>
               <section>
                  <GoogleAuthIcon :authType="pageAuthType" />

                  <div class="flex items-center my-10">
                     <hr class="flex-1 border-gray-300" />
                     <span class="px-4 text-gray-500 uppercase">Or</span>
                     <hr class="flex-1 border-gray-300" />
                  </div>

                  <div class="flex-form">
                     <p>
                        This website offers a Passwordless Sign-In option. Instead of remembering a password,
                        you'll receive a one-time code via email each time you sign in.
                     </p>
                     <Textbox v-model="email" placeholder="Email" required />
                     <Button :label="pageAuthType" submit="submit" @click="onSignupStart" />
                  </div>
               </section>
            </template>
         </Card>

         <!-- Sign in verify code -->
         <Card v-else class="max-w-xl p-12 w-full mx-auto">
            <template #title>
               <h1 class="h1">Input validation code</h1>
            </template>
            <template #content>
               <section>
                  <div class="flex-form">
                     <p>
                        To finish the signup process, enter the code that was emailed to you. Note that the
                        code is only valid for 10 minutes.
                     </p>

                     <InputOtp
                        :length="6"
                        class="w-50"
                        v-model="userMagicCode"
                        type="text"
                        placeholder="Input email code"
                        required
                     />
                     <p v-if="isCodeInvalid" class="validation">{{ invalidCodeText }}</p>

                     <Button class="w-fit" type="submit" @click="onCodeSubmit">Submit code</Button>
                  </div>

                  <div class="mt-section-inner flex-form">
                     <p>
                        If you didnt receive an email, please check your Junk folder or resend another code.
                     </p>
                     <Button class="w-fit" type="button" @click="onResendCode">Resend code</Button>
                  </div>
               </section>
            </template>
         </Card>
      </form>

      <Toaster :title="toastInfo.title" :isOpen="toastInfo.open">
         <template #description>
            <p>{{ toastInfo.description }}</p>
         </template>
      </Toaster>
   </div>
</template>

<script setup lang="ts">
import GoogleAuthIcon from "@/components/googleAuthIcon/GoogleAuthIcon.vue";
import Card from "primevue/card";
import Textbox from "primevue/inputtext";
import InputOtp from "primevue/inputotp";
import Button from "primevue/button";
import {
   createCode,
   resendCode,
   clearLoginAttemptInfo,
   getLoginAttemptInfo,
   consumeCode,
} from "supertokens-web-js/recipe/passwordless";
import Toaster from "@/components/toaster/Toaster.vue";
import { useRouter } from "vue-router";
import { signInAndUp } from "supertokens-web-js/recipe/thirdparty";
import { useUserStore } from "@/stores/userStore";

const props = defineProps<{
   authType: "signup" | "signin";
}>();

// data
// -----------------------------------------
const userStore = useUserStore();
const router = useRouter();
const email = ref("rez-mask@outlook.com");
const toastInfo = ref({
   open: false,
   title: "",
   description: "",
});

const timerRef = ref(0);
// magic code input
const showMagicInputCode = ref(false); // if a magic link has been sent, show the code input field
const userMagicCode = ref(""); // user input code

const codeInputAttemptCount = ref(0);
const codeInputAttemptMax = ref(0);
const isCodeInvalid = ref(false);

// lifecycle
// -----------------------------------------
onMounted(async () => {
   showMagicInputCode.value = await hasInitialMagicLinkBeenSent();

   // if the url contains query param ?thirdPartyId=google, we handle the google callback
   if (router.currentRoute.value.query.thirdPartyId === "google") {
      await handleGoogleCallback();
   }
});

// computed
// -----------------------------------------
const invalidCodeText = computed(() => {
   return `Invalid code. You have ${codeInputAttemptMax.value - codeInputAttemptCount.value} attempts left.`;
});

const pageAuthType = computed(() => {
   return props.authType === "signin" ? "Sign in" : "Sign up";
});

// methods
// -----------------------------------------
function showToast(title: string, description: string) {
   toastInfo.value.open = false;
   toastInfo.value.title = title;
   toastInfo.value.description = description;

   window.clearTimeout(timerRef.value);
   timerRef.value = window.setTimeout(() => {
      toastInfo.value.open = true;
   }, 100);
}

// -- Magic links
/** If the user refreshes the page on the consume code, we need to know if we are showing the code input field */
async function hasInitialMagicLinkBeenSent() {
   const codeAlreadySent = await getLoginAttemptInfo();
   if (codeAlreadySent) console.info("Code already sent: ", codeAlreadySent);
   return codeAlreadySent !== undefined;
}

/** If the code is valid, we redirect to the home page  */
async function onCodeSubmit() {
   const genericErrorTitle = "Error processing your OTP code";
   const genericErrorDescription = "Please try again later.";
   isCodeInvalid.value = false;

   try {
      const response = await consumeCode({ userInputCode: userMagicCode.value });

      // Success: clear login attempt info
      if (response.status === "OK") {
         await clearLoginAttemptInfo();

         // New user signup success
         if (response.createdNewRecipeUser && response.user.loginMethods.length === 1) {
            console.info("New user signed up successfully");
         }
         // Existing user sign-in success
         else {
            console.info("Existing user signed in successfully");
         }

         // redirect to home page with vue router
         userStore.updateAuth();
         router.push({ name: "home" });
      }
      // Failure: expired/invalid code, etc.
      else {
         console.error("Submit code: ", response);

         // Invalid code input - show validation warning
         if (response.status === "INCORRECT_USER_INPUT_CODE_ERROR") {
            codeInputAttemptCount.value = response.failedCodeInputAttemptCount;
            codeInputAttemptMax.value = response.maximumCodeInputAttempts;
            isCodeInvalid.value = true;
         }
         // Other type of error (such as max invalid count reached), show an error toast and hide the code input field
         else {
            await clearLoginAttemptInfo();
            showToast(genericErrorTitle, genericErrorDescription);
            showMagicInputCode.value = false;
         }
      }
   } catch (err: any) {
      // for any other type of error, show a generic error toast and hide the code input field
      console.error("Submit code: ", err.message);
      // if (err.isSuperTokensGeneralError === true) {} else {}

      showToast(genericErrorTitle, genericErrorDescription);
      showMagicInputCode.value = false;
   }
}

//** Resend OTP code which might have not been received by the user */
async function onResendCode() {
   const genericErrorTitle = "Resend OTP failed";
   const genericErrorDescription = "Please try again later.";

   try {
      const response = await resendCode();
      console.log("resend code response: ", response);

      // this can happen if the user has already successfully logged in into
      // another device whilst also trying to login to this one.
      if (response.status === "RESTART_FLOW_ERROR") {
         // we clear the login attempt info that was added when the createCode function
         // was called - so that if the user does a page reload, they will now see the
         // enter email / phone UI again.
         await clearLoginAttemptInfo();

         console.error("Resend code failed: ", response);
         showToast(genericErrorTitle, genericErrorDescription);
         showMagicInputCode.value = false;
      }
      // Magic link resent successfully, show toast to confirm
      else {
         showMagicInputCode.value = true;
         showToast("Code re-sent", "Please check your email for the new code.");
      }
   } catch (err: any) {
      console.error("Resend code failed: ", err.message);
      showToast(genericErrorTitle, genericErrorDescription);
      showMagicInputCode.value = false;

      // this may be a custom error message sent from the API by you.
      // if (err.isSuperTokensGeneralError === true) {} else {}
   }
}

/** If the email is valid, we will send an OTP code by email */
async function onSignupStart() {
   // TODO: validate email

   const sendCodeErrorTitle = "Error sending OTP code";
   const sendCodeErrorDescription = "Please try again later.";

   try {
      const response = await createCode({
         email: email.value,
         shouldTryLinkingWithSessionUser: false, // If true, SuperTokens will attempt to link the passwordless code to an existing session user
         userContext: {}, // Optionally include user context
      });

      console.log("Create code response: ", response);

      // Disabled Sign-Up or Sign-In or invalid configuration etc.
      if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
         console.error("Signup started: ", response.reason);
         showToast(sendCodeErrorTitle, sendCodeErrorDescription);
      }
      // Magic link sent successfully, show the code input field
      else {
         showMagicInputCode.value = true;
      }
   } catch (err: any) {
      console.error("Signup started: ", err.message);

      // this may be a custom error message sent from the API OR the input email is not valid
      if (err.isSuperTokensGeneralError === true) {
         showToast(sendCodeErrorTitle, sendCodeErrorDescription);
      } else {
         showToast(sendCodeErrorTitle, sendCodeErrorDescription);
      }
   }
}

/** Once the third party provider redirects your user back to your app, you need to consume the information to sign in the user. */
async function handleGoogleCallback() {
   const sendCodeErrorTitle = "Failed to sign in with Google";
   const sendCodeErrorDescription = "Please try again later.";

   try {
      const response = await signInAndUp();

      if (response.status === "OK") {
         console.log("handleGoogleCallback> ", response.user);
         // sign up successful
         if (response.createdNewRecipeUser && response.user.loginMethods.length === 1) {
            console.log("New user signed up successfully");
         }
         // sign in successful
         else {
            console.log("Existing user signed in successfully");
         }

         window.location.assign("/home");
      } else if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
         console.error("Google auth callback: ", response.reason);
         showToast(sendCodeErrorTitle, sendCodeErrorDescription);
      }
      // SuperTokens requires that the third party provider
      // gives an email for the user. If that's not the case, sign up / in
      // will fail.
      else {
         console.error("Google auth callback: ", response);
         showToast(sendCodeErrorTitle, "No email provided by social login. Please use another form of login");
         window.location.assign("/signin"); // redirect back to login page
      }
   } catch (err: any) {
      console.error("Google auth callback: ", err.message);
      showToast(sendCodeErrorTitle, sendCodeErrorDescription);
      // if (err.isSuperTokensGeneralError === true) {} else {}
   }
}
</script>

<style scoped></style>
