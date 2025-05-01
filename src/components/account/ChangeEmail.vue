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
            <form @submit.prevent="sendChangeEmail" class="spacing-form">
               <label for="email" class="label">Enter your new email</label>
               <InputText v-model="userNewEmail" type="email" id="email" name="email" required />
               <Button type="submit" :loading="isLoading">Change email</Button>
            </form>
         </div>

         <!-- Email sent -->
         <ActionConfirmMsg v-else iconClass="pi pi-envelope">
            <p>
               <span class="block text-wrap">We have a verification email to:</span>
               <strong class="text-primary break-all px-2">
                  {{ userNewEmail }}
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
import InputText from "primevue/inputtext";
import accountService from "../../services/account/accountService";
import ActionConfirmMsg from "../../components/actionConfirmMsg/ActionConfirmMsg.vue";
import toastContent from "../../content/generic/toastContent";

const emits = defineEmits(["error"]);

// data
// -----------------------------------------
const isLoading = ref(false);
const userNewEmail = ref("");
const isEmailSent = ref(false);

// methods
// -----------------------------------------
// change the user's email
async function sendChangeEmail() {
   isLoading.value = true;

   try {
      const response = await accountService.changeEmail(userNewEmail.value);
      if (!response.ok) {
         isEmailSent.value = false;
         throw new Error(`Error changing email: ${response.status} - ${response.statusText}`);
      }

      // request change email sent successfully, show confirmation message
      isEmailSent.value = true;
   } catch (error) {
      isEmailSent.value = false;

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
</script>

<style scoped></style>
