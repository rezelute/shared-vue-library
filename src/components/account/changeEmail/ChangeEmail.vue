<template>
   <!-- Change email -->
   <Card>
      <template #title>
         <h2>Change your email</h2>
      </template>
      <template #content>
         <div class="spacing-elements">
            <p>
               You will receive an email to your old email to verify your new email address. Please click on
               the email link to update your email.
            </p>

            <form @submit.prevent="sendChangeEmail" class="flex-form">
               <label for="email">New email</label>
               <InputText v-model="userNewEmail" type="email" id="email" name="email" required />
               <Button type="submit">Change email</Button>
            </form>
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import useToast from "@/utils/toast";

const { addToast, toastContent } = useToast();

// data
// -----------------------------------------
const userNewEmail = ref("");

// methods
// -----------------------------------------
// change the user's email
async function sendChangeEmail() {
   try {
      const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/change-email`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
         body: JSON.stringify({ email: userNewEmail.value }),
      });

      const result = await response.json();

      if (!response.ok) {
         throw new Error(result.message || "Failed to update email");
      }

      addToast({
         severity: "info",
         summary: "Verification email sent",
         detail: "We have sent you an email to verify your new email address. Please check your inbox.",
      });
   } catch (error) {
      addToast({
         severity: "danger",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error,
      });
   }
}
</script>

<style scoped></style>
