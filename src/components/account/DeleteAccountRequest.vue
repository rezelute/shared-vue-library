<template>
   <!-- Delete account request -->
   <Card>
      <template #title>
         <h2 class="h2">Delete your account</h2>
      </template>
      <template #content>
         <div v-if="!isDeleteEmailSent" class="vstack-form">
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
import Button from "primevue/button";
import Card from "primevue/card";
import { ref } from "vue";
import ActionConfirmMsg from "../../components/actionConfirmMsg/ActionConfirmMsg.vue";
import toastContent from "../../content/generic/toastContent";
import accountService from "../../services/account/accountService";
import { type EmitNotify } from "../../types";
import normalizeError from "../../utils/error/normalizeError.util";

const emits = defineEmits(["deleteAccountRequestError", "deleteAccountRequestSuccess"]);

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

      await accountService.requestDelete();

      // request deletion email sent successfully, show confirmation message
      isDeleteEmailSent.value = true;
      emits("deleteAccountRequestSuccess");
   } catch (err) {
      isDeleteEmailSent.value = false;

      emits("deleteAccountRequestError", {
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
</script>

<style scoped></style>
