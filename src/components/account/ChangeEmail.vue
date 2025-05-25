<template>
   <Card>
      <template #title>
         <h2 class="h2">Change your email</h2>
      </template>
      <template #content>
         <!-- Change email form -->
         <div v-if="!isEmailSent" class="spacing-elements">
            <p>
               You will receive an email to your old email to verify your new email address. Please click on
               the email link to update your email.
            </p>
            <form class="spacing-form" @submit.prevent="sendChangeEmail">
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
import Card from "primevue/card";
import Button from "primevue/button";
import EmailInput from "../../components/account/EmailInput.vue";
import accountService from "../../services/account/accountService";
import ActionConfirmMsg from "../../components/actionConfirmMsg/ActionConfirmMsg.vue";
import toastContent from "../../content/generic/toastContent";
import { type EmitNotify } from "../../types";

const updateEmailFailSameEmail = "No changes have been made";
const updateEmailFailSameEmailDetail =
   "The new email address you provided is the same as the current one. Please enter a different email address.";

const emits = defineEmits(["notify"]);

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

      const response = await accountService.changeEmail(email.value);
      if (!response.ok) {
         throw response;
      }

      // request change email sent successfully, show confirmation message
      isEmailSent.value = true;
   } catch (error) {
      isEmailSent.value = false;

      // handle response errors
      if (error instanceof Response) {
         const json = await (error as Response).json();
         if (json.error === "EMAIL_SAME_AS_CURRENT") {
            emits("notify", {
               type: "email_same_as_current",
               severity: "info",
               summary: updateEmailFailSameEmail,
               detail: updateEmailFailSameEmailDetail,
               json,
            } satisfies EmitNotify);
         }
      }
      // handle other errors
      else {
         emits("notify", {
            type: "unexpected",
            severity: "error",
            summary: toastContent.error.somethingWentWrong.summary,
            detail: toastContent.error.somethingWentWrong.detail,
            json: error,
         } satisfies EmitNotify);
      }
   } finally {
      isLoading.value = false;
   }
}
</script>

<style scoped></style>
