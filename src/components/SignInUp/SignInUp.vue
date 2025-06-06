<template>
   <PageLoader :isLoading="isLoading">
      <SignInUpForm
         v-if="!showMagicInputCode"
         :pageAuthType="pageAuthType"
         @sendCodeSuccess="() => (showMagicInputCode = true)"
         @signupStartError="(payload: EmitNotify) => $emit('signupStartError', payload)"
         @googleSignInError="(payload: EmitNotify) => $emit('googleSignInError', payload)"
      />
      <VerifyCode
         v-else
         :pageAuthType="pageAuthType"
         @verificationCodeSuccess="(...args) => $emit('verificationCodeSuccess', ...args)"
         @verificationCodeError="onVerifyCodeSubmitError"
         @resendCodeSuccess="(...args) => $emit('resendCodeSuccess', ...args)"
         @resendCodeError="onResendCodeError"
         @restartFlow="() => (showMagicInputCode = false)"
      />
   </PageLoader>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import SignInUpForm from "../../components/SignInUp/signInUpForm/SignInUpForm.vue";
import VerifyCode from "../../components/SignInUp/verifyCode/VerifyCode.vue";
import { getLoginAttemptInfo } from "supertokens-web-js/recipe/passwordless";
import { useRouter } from "vue-router";
import { signInAndUp } from "supertokens-web-js/recipe/thirdparty";
import PageLoader from "../../components/loading/pageLoader/PageLoader.vue";
import toastContent from "../../content/generic/toastContent";
import { type EmitNotify } from "../../types";
import normalizeError from "../../utils/error/normalizeError.util";

const emits = defineEmits([
   "signupStartError",
   "checkMagicLinkSentError",
   "resendCodeSuccess",
   "resendCodeError",
   "verificationCodeSuccess",
   "verificationCodeError",
   "googleCallbackSuccess",
   "googleCallbackError",
   "googleSignInError",
]);
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
   } catch (err) {
      emits("checkMagicLinkSentError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
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

         emits("googleCallbackSuccess");
      } else if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
         emits("googleCallbackError", {
            type: "sign_in_up_not_allowed",
            severity: "error",
            summary: googleFailSummary,
            detail: googleFailDetail,
            json: {
               status: response.status,
               reason: response.reason,
               responseDetails: normalizeError(response),
            },
         } satisfies EmitNotify);
      }
      // SuperTokens requires that the third party provider
      // gives an email for the user. If that's not the case, sign up / in
      // will fail.
      else {
         emits("googleCallbackError", {
            type: "no_user_email",
            severity: "error",
            summary: googleFailSummary,
            detail: googleFailDetail,
            json: { status: response.status, responseDetails: normalizeError(response) },
         } satisfies EmitNotify);
      }
   } catch (err) {
      // if (err.isSuperTokensGeneralError === true) {} else {}

      emits("googleCallbackError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
   } finally {
      isLoading.value = false;
   }
}

function onVerifyCodeSubmitError(payload: EmitNotify) {
   // reset the code input field
   if (payload.type === "input_code_invalid") {
      showMagicInputCode.value = false;
   }

   // emit back up to the parent component to handle toasting
   emits("verificationCodeError", payload);
}

function onResendCodeError(payload: EmitNotify) {
   // reset the code input field
   if (payload.type === "restart_flow_error") {
      showMagicInputCode.value = false;
   }

   // emit back up to the parent component to handle toasting
   emits("resendCodeError", payload);
}
</script>

<style scoped></style>
