<template>
   <!-- Delete account request -->
   <Card>
      <template #title>
         <h2 class="h2">Delete your account</h2>
      </template>
      <template #content>
         <div v-if="!isDeleteEmailSent" class="spacing-elements">
            <p>
               You will receive an email to verify your account deletion. Please click on the email link to
               delete your account.
            </p>

            <Button type="button" :isLoading="isLoading" @click="sendDeleteEmail">Send deletion email</Button>
         </div>

         <ActionConfirmMsg v-else iconClass="pi pi-envelope">
            <p>
               We have sent you an email to verify your account deletion. Please check your inbox and click on
               the verification link.
            </p>
         </ActionConfirmMsg>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import accountService from "../../services/account/accountService";
import ActionConfirmMsg from "../../components/actionConfirmMsg/ActionConfirmMsg.vue";
import toastContent from "../../content/generic/toastContent";
import { type EmitNotify } from "../../types";

const emits = defineEmits(["notify"]);

// data
// -----------------------------------------
const isDeleteEmailSent = ref(false);
const isLoading = ref(false);

// methods
// -----------------------------------------
// send a request to the server to send a deletion email
async function sendDeleteEmail() {
   try {
      isLoading.value = true;

      const response = await accountService.requestDelete();
      if (!response.ok) {
         throw response;
      }
      // request deletion email sent successfully, show confirmation message
      else {
         isDeleteEmailSent.value = true;
      }
   } catch (error) {
      isDeleteEmailSent.value = false;

      emits("notify", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: error,
      } satisfies EmitNotify);
   } finally {
      isLoading.value = false;
   }
}
</script>

<style scoped></style>
