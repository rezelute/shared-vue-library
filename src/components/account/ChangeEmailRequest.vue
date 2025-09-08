<template>
   <Card>
      <template #title>
         <h2 class="h2">Change your email</h2>
      </template>
      <template #content>
         <!-- Change email form -->
         <div v-if="!isEmailSent">
            <form class="vstack-form" @submit.prevent="sendChangeEmail">
               <p>
                  You will receive an email to your old email to verify your new email address. Please click
                  on the email link to update your email.
               </p>

               <EmailInput
                  v-model:email="email"
                  :isSubmitClicked="isSubmitClicked"
                  labelText="Enter your new email"
                  @validity-changed="
                     (val: boolean) => {
                        isEmailValid = val;
                     }
                  "
               />

               <Button type="submit" :loading="isLoading">Change email</Button>
            </form>
         </div>

         <!-- Email sent -->
         <ActionConfirmMsg v-else iconClass="pi pi-envelope">
            <p>
               <span class="block text-wrap">We have a verification email to:</span>
               <strong class="text-primary break-all px-2">
                  {{ email }}
               </strong>
               <span class="block">
                  Please check the inbox of your new email and click on the verification link to change your
                  email.
               </span>
            </p>
         </ActionConfirmMsg>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Card from "primevue/card";
import { ref } from "vue";
import EmailInput from "../../components/account/EmailInput.vue";
import ActionConfirmMsg from "../../components/actionConfirmMsg/ActionConfirmMsg.vue";
import toastContent from "../../content/generic/toastContent";
import accountService from "../../services/account/accountService";
import { type EmitNotify } from "../../types";
import { ApiResponseError } from "../../utils/error/ApiResponseError";
import normalizeError from "../../utils/error/normalizeError.util";

const updateEmailFailSameEmail = "No changes have been made";
const updateEmailFailSameEmailDetail =
   "The new email address you provided is the same as the current one. Please enter a different email address.";
const updateEmailSuccessSummary = "Email updated successfully";
const updateEmailSuccessDetail = "We have updated your email address successfully.";

const emits = defineEmits(["changeEmailRequestError", "changeEmailActionSuccess"]);

// data
// -----------------------------------------
const email = ref("mytestemail1235667@gmail.com");
const isLoading = ref(false);
const isEmailSent = ref(false);
const isEmailValid = ref(false);
const isSubmitClicked = ref(false);

// methods
// -----------------------------------------
// change the user's email
async function sendChangeEmail() {
   isSubmitClicked.value = true;

   if (!isEmailValid.value) {
      return;
   }

   try {
      isLoading.value = true;

      const data = await accountService.requestEmailChange(email.value);

      // Email was updated immediately by supertokens (likely because the email was previously verified)
      if (data.message === "Email updated") {
         emits("changeEmailActionSuccess", {
            type: "email_already_verified",
            severity: "success",
            summary: updateEmailSuccessSummary,
            detail: updateEmailSuccessDetail,
         } satisfies EmitNotify);
      }
      // response message is most likely "Verification email sent"
      // a request change email was sent successfully, show confirmation message
      else {
         isEmailSent.value = true;
      }
   } catch (err) {
      isEmailSent.value = false;

      // handle response errors
      if (err instanceof ApiResponseError) {
         if (err.data.error === "EMAIL_SAME_AS_CURRENT") {
            emits("changeEmailRequestError", {
               type: "email_same_as_current",
               severity: "info",
               summary: updateEmailFailSameEmail,
               detail: updateEmailFailSameEmailDetail,
               json: err,
            } satisfies EmitNotify);
         }
      }
      // handle other errors
      else {
         emits("changeEmailRequestError", {
            type: "unexpected",
            severity: "error",
            summary: toastContent.error.somethingWentWrong.summary,
            detail: toastContent.error.somethingWentWrong.detail,
            json: normalizeError(err),
         } satisfies EmitNotify);
      }
   } finally {
      isLoading.value = false;
   }
}
</script>

<style scoped></style>
