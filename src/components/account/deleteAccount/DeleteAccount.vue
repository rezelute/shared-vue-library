<template>
   <!-- Delete account -->
   <Card>
      <template #title>
         <h2>Delete your account</h2>
      </template>
      <template #content>
         <div v-if="!isDeleteEmailSent" class="spacing-elements">
            <p>
               You will receive an email to verify your account deletion. Please click on the email link to
               delete your account.
            </p>

            <Button type="button" @click="sendDeleteEmail">Send deletion email</Button>
         </div>
         <div v-else>
            <p>
               We have sent you an email to verify your account deletion. Please check your inbox and click on
               the verification link.
            </p>
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import useToast from "@/utils/toast";

const { addToast, toastContent } = useToast();

// data
// -----------------------------------------
const isDeleteEmailSent = ref(false);

// methods
// -----------------------------------------
// send a request to the server to send a deletion email
async function sendDeleteEmail() {
   try {
      const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/request-delete`, {
         method: "POST",
         credentials: "include",
      });

      const result = await response.json();
      if (!response.ok) {
         throw new Error(result.error || "Failed to send deletion email.");
      }

      if (!response.ok) {
         throw new Error(result.error || "Failed to send deletion email.");
      }

      isDeleteEmailSent.value = true;
   } catch (error) {
      isDeleteEmailSent.value = false;

      addToast({
         severity: "danger",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error,
      });

      if (error instanceof Error) {
         console.error(`Error sending deletion email: ${error.message}`);
      } else {
         console.error("Error sending deletion email: Unknown error occurred");
      }
   }
}
</script>

<style scoped></style>
