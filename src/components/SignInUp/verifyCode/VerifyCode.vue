<template>
   <div class="px-4 py-8 sm:p-8">
      <Card class="max-w-xl p-0 sm:p-12 w-full mx-auto">
         <template #title>
            <div class="flex flex-col items-stretch gap-4 sm:flex-row sm:items-start">
               <!-- reset sign in/up process -->
               <Button
                  class="me-4 sm:me-0"
                  type="button"
                  variant="outlined"
                  icon="pi pi-arrow-left"
                  aria-label="Start over"
                  @click="onRestartFlow"
               />
               <h1 class="h1 mt-0 sm:mt-0">Input validation code</h1>
            </div>
         </template>
         <template #content>
            <form class="spacing-groups" @submit.prevent>
               <!-- Code input & Submit -->
               <div class="spacing-form">
                  <p>
                     To finish the signup process, enter the code that was emailed to you. Note that the code
                     is only valid for 10 minutes.
                  </p>

                  <div>
                     <InputOtp
                        v-model="userMagicCode"
                        :length="6"
                        class="w-50"
                        type="text"
                        placeholder="Input email code"
                        required
                        :invalid="isCodeValid === false"
                     />
                     <Message v-if="isCodeValid === false" severity="error" size="small" variant="simple">
                        {{ invalidCodeText }}
                     </Message>
                  </div>
                  <Button class="w-fit" type="submit" :loading="isSubmittingCode" @click="onCodeSubmit">
                     Submit code
                  </Button>
               </div>

               <!-- Code re-send -->
               <div class="spacing-form">
                  <p>If you didnt receive an email, please check your Junk folder or resend another code.</p>
                  <Button class="w-fit" type="button" :loading="isResendingCode" @click="onResendCode">
                     Resend code
                  </Button>
               </div>
            </form>
         </template>
      </Card>
   </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import Card from "primevue/card";
import InputOtp from "primevue/inputotp";
import Button from "primevue/button";
import { resendCode, clearLoginAttemptInfo, consumeCode } from "supertokens-web-js/recipe/passwordless";
import toastContent from "../../../content/generic/toastContent";
import Message from "primevue/message";
import { type EmitNotify } from "../../../types";
import normalizeError from "../../../utils/error/normalizeError.util";

const emits = defineEmits([
   "verificationCodeSuccess",
   "verificationCodeError",
   "resendCodeSuccess",
   "resendCodeError",
   "restartFlow",
]);

defineProps<{
   pageAuthType: "Sign in" | "Sign up";
}>();

// data
// -----------------------------------------
const userMagicCode = ref(""); // user input code
const isCodeValid = ref<boolean | null>(null);
const codeInputAttemptCount = ref(0);
const codeInputAttemptMax = ref(0);
const isSubmittingCode = ref(false);
const isResendingCode = ref(false);

// lifecycle
// -----------------------------------------
// reset code validity when the user starts typing
watch(userMagicCode, () => {
   if (isCodeValid.value !== null) {
      isCodeValid.value = null;
   }
});

// computed
// -----------------------------------------
const invalidCodeText = computed(() => {
   if (userMagicCode.value.length < 6) {
      return "Please enter a valid code length";
   }
   // invalid code input with attempts left
   else if (
      codeInputAttemptMax.value > 0 &&
      codeInputAttemptCount.value > 0 &&
      codeInputAttemptCount.value < codeInputAttemptMax.value
   ) {
      return `Invalid code. You have ${codeInputAttemptMax.value - codeInputAttemptCount.value} attempts left.`;
   }
   // code likely valid
   else {
      return "";
   }
});

// methods
// -----------------------------------------
/** If the code is valid, we tell the parent so it can redirect to the home page  */
async function onCodeSubmit() {
   const otpErrorSummary = "Unable to process your OTP code";
   const otpErrorDetail = "Please try again later.";
   isCodeValid.value = true;

   // validate code length
   if (userMagicCode.value.length < 6) {
      isCodeValid.value = false;
      return;
   }

   try {
      isSubmittingCode.value = true;
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

         isCodeValid.value = true;

         emits("verificationCodeSuccess", {
            summary: "Code verified",
            detail: "You have successfully signed in.",
         });
      }
      // Failure: expired/invalid code, etc.
      else {
         console.error("Submit code: ", response);

         // Invalid code input - show validation warning
         if (response.status === "INCORRECT_USER_INPUT_CODE_ERROR") {
            codeInputAttemptCount.value = response.failedCodeInputAttemptCount;
            codeInputAttemptMax.value = response.maximumCodeInputAttempts;
            isCodeValid.value = false;
         }
         // Other type of error ex. max invalid count reached, invalid code etc
         // Show an error toast and hide the code input field
         else {
            await clearLoginAttemptInfo();

            emits("verificationCodeError", {
               type: "input_code_invalid",
               severity: "error",
               summary: otpErrorSummary,
               detail: otpErrorDetail,
               json: {
                  status: response.status,
                  responseDetails: normalizeError(response.fetchResponse),
               },
            } satisfies EmitNotify);
         }
      }
   } catch (err) {
      // for any other type of error, show a generic error toast and hide the code input field
      // if (err.isSuperTokensGeneralError === true) {} else {}

      emits("verificationCodeError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
   } finally {
      isSubmittingCode.value = false;
   }
}

//** Resend OTP code which might have not been received by the user */
async function onResendCode() {
   const resendOtpFailedSummary = "Resend OTP failed";
   const resendOtpFailedDetail = "Please try again later.";

   try {
      isResendingCode.value = true;
      const response = await resendCode();
      console.log("resend code response: ", response);

      // this can happen if the user has already successfully logged in into
      // another device whilst also trying to login to this one.
      if (response.status === "RESTART_FLOW_ERROR") {
         // we clear the login attempt info that was added when the createCode function
         // was called - so that if the user does a page reload, they will now see the
         // enter email / phone UI again.
         await clearLoginAttemptInfo();

         emits("resendCodeError", {
            type: "restart_flow_error",
            severity: "error",
            summary: resendOtpFailedSummary,
            detail: resendOtpFailedDetail,
            json: {
               status: response.status,
               responseDetails: normalizeError(response.fetchResponse),
            },
         } satisfies EmitNotify);
      }
      // Magic link resent successfully, show toast to confirm
      else {
         emits("resendCodeSuccess", {
            summary: "Code re-sent",
            detail: "Please check your email for the new code.",
         });
      }
   } catch (err) {
      // this may be a custom error message sent from the API by you.
      // if (err.isSuperTokensGeneralError === true) {} else {}

      emits("resendCodeError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
   } finally {
      isResendingCode.value = false;
   }
}

function onRestartFlow() {
   // we clear the login attempt info that was added when the createCode function
   // was called - so that if the user does a page reload, they will now see the
   // enter email / phone UI again.
   clearLoginAttemptInfo();
   emits("restartFlow");
}
</script>

<style scoped></style>
