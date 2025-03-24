<template>
   <div>
      <Card class="max-w-xl p-12 w-full mx-auto">
         <template #title>
            <h1 class="h1">Input validation code</h1>
         </template>
         <template #content>
            <section>
               <div class="flex-form">
                  <p>
                     To finish the signup process, enter the code that was emailed to you. Note that the code
                     is only valid for 10 minutes.
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
                  <p>If you didnt receive an email, please check your Junk folder or resend another code.</p>
                  <Button class="w-fit" type="button" @click="onResendCode">Resend code</Button>
               </div>
            </section>
         </template>
      </Card>

      <Toast />
   </div>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import InputOtp from "primevue/inputotp";
import Button from "primevue/button";
import { resendCode, clearLoginAttemptInfo, consumeCode } from "supertokens-web-js/recipe/passwordless";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import addToast from "@/utils/toast";
import toastContent from "@/content/generic/toastContent";

const toast = useToast();

defineProps<{
   pageAuthType: "Sign in" | "Sign up";
}>();

// data
// -----------------------------------------
const userMagicCode = ref(""); // user input code
const isCodeInvalid = ref(false);
const codeInputAttemptCount = ref(0);
const codeInputAttemptMax = ref(0);

// computed
// -----------------------------------------
const invalidCodeText = computed(() => {
   return `Invalid code. You have ${codeInputAttemptMax.value - codeInputAttemptCount.value} attempts left.`;
});

// methods
// -----------------------------------------
/** If the code is valid, we redirect to the home page  */
async function onCodeSubmit() {
   const otpErrorSummary = "Error processing your OTP code";
   const otpErrorDetail = "Please try again later.";
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
         window.location.href = "/home";
         // userStore.updateAuth();
         // router.push({ name: "home" });
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

            addToast({
               toast,
               severity: "danger",
               summary: otpErrorSummary,
               detail: otpErrorDetail,
               logInfo: { error: response },
            });

            showMagicInputCode.value = false;
         }
      }
   } catch (error: any) {
      // for any other type of error, show a generic error toast and hide the code input field
      // if (err.isSuperTokensGeneralError === true) {} else {}

      addToast({
         toast,
         severity: "danger",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         logInfo: { error },
      });

      showMagicInputCode.value = false;
   }
}

//** Resend OTP code which might have not been received by the user */
async function onResendCode() {
   const resendOtpFailedSummary = "Resend OTP failed";
   const resendOtpFailedDetail = "Please try again later.";

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

         showMagicInputCode.value = false;

         addToast({
            toast,
            severity: "danger",
            summary: resendOtpFailedSummary,
            detail: resendOtpFailedDetail,
            logInfo: { summary: "Resend code failed", error: response },
         });
      }
      // Magic link resent successfully, show toast to confirm
      else {
         showMagicInputCode.value = true;

         addToast({
            toast,
            severity: "success",
            summary: "Code re-sent",
            detail: "Please check your email for the new code.",
         });
      }
   } catch (error: any) {
      // this may be a custom error message sent from the API by you.
      // if (err.isSuperTokensGeneralError === true) {} else {}
      showMagicInputCode.value = false;

      addToast({
         toast,
         severity: "danger",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         logInfo: { error },
      });
   }
}
</script>

<style scoped></style>
