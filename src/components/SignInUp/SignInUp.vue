<template>
   <PageLoader :isLoading="isLoading">
      <SignInUpForm
         v-if="!showMagicInputCode"
         :pageAuthType="pageAuthType"
         @sendCodeSuccess="() => (showMagicInputCode = true)"
         @error="(...args) => $emit('error', ...args)"
      />
      <VerifyCode
         v-else
         :pageAuthType="pageAuthType"
         @verificationCodeSuccess="onVerificationCodeSuccess"
         @resendCodeSuccess="(...args) => $emit('resendCodeSuccess', ...args)"
         @restartFlow="() => (showMagicInputCode = false)"
         @error="onVerifyCodeError"
      />
   </PageLoader>
</template>

<script setup lang="ts">
import SignInUpForm from "../../components/SignInUp/signInUpForm/SignInUpForm.vue";
import VerifyCode from "../../components/SignInUp/verifyCode/VerifyCode.vue";
import { getLoginAttemptInfo } from "supertokens-web-js/recipe/passwordless";
import { useRouter } from "vue-router";
import { signInAndUp } from "supertokens-web-js/recipe/thirdparty";
import PageLoader from "../../components/pageLoader/PageLoader.vue";
import toastContent from "../../content/generic/toastContent";

const emits = defineEmits(["error", "resendCodeSuccess"]);
const route = useRoute();
const router = useRouter();

// data
// -----------------------------------------
const isLoading = ref(true);
const showMagicInputCode = ref(false); // if a magic link has been sent, show the code input field

// lifecycle
// -----------------------------------------
onMounted(async () => {
   showMagicInputCode.value = !!(await hasInitialMagicLinkBeenSent());

   // if the url contains query param ?thirdPartyId=google, we handle the google callback
   if (router.currentRoute.value.query.thirdPartyId === "google") {
      await handleGoogleCallback();
   }
});

// computed
// -----------------------------------------
const pageAuthType = computed(() => {
   if (route.name === "signup") return "Sign up";
   else return "Sign in";
});

// methods
// -----------------------------------------
/** If the user refreshes the page on the consume code, we need to know if we are showing the code input field */
async function hasInitialMagicLinkBeenSent() {
   isLoading.value = true;

   try {
      const codeAlreadySent = await getLoginAttemptInfo();
      if (codeAlreadySent) console.info("Code already sent: ", codeAlreadySent);
      return codeAlreadySent !== undefined;
   } catch (error) {
      emits("error", {
         type: "unexpected",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error,
      });
   } finally {
      isLoading.value = false;
   }
}

/** Once the third party provider redirects your user back to your app, you need to consume the information to sign in the user. */
async function handleGoogleCallback() {
   const googleFailSummary = "Failed to sign in with Google";
   const googleFailDetail = "Please try again later or try another form of login.";

   try {
      isLoading.value = true;
      const response = await signInAndUp();

      if (response.status === "OK") {
         console.log("handleGoogleCallback> ", response.user);
         // sign UP successful
         if (response.createdNewRecipeUser && response.user.loginMethods.length === 1) {
            console.log("New user signed up successfully");
         }
         // sign IN successful
         else {
            console.log("Existing user signed in successfully");
         }

         window.location.assign("/home");
      } else if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
         emits("error", {
            type: "sign_in_up_not_allowed",
            summary: googleFailSummary,
            detail: googleFailDetail,
            error: response,
         });
      }
      // SuperTokens requires that the third party provider
      // gives an email for the user. If that's not the case, sign up / in
      // will fail.
      else {
         emits("error", {
            type: "unexpected",
            summary: googleFailSummary,
            detail: googleFailDetail,
            error: response,
         });

         window.location.assign("/signin"); // redirect back to login page
      }
   } catch (error) {
      // if (err.isSuperTokensGeneralError === true) {} else {}

      emits("error", {
         type: "unexpected",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error,
      });
   } finally {
      isLoading.value = false;
   }
}

// -- verification code handlers --
function onVerificationCodeSuccess(param: EmitSuccess) {
   // redirect to home page with vue router
   window.location.href = "/home";
}

function onVerifyCodeError(param: EmitError) {
   // reset the code input field
   if (param.type === "restart_flow_error" || param.type === "input_code_invalid") {
      showMagicInputCode.value = false;
   }

   // emit back up to the parent component to handle toasting
   emits("error", {
      type: param.type,
      summary: param.summary,
      detail: param.detail,
      error: param.error,
   } as EmitError);
}
</script>

<style scoped></style>
