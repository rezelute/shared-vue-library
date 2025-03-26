<template>
   <Card class="max-w-xl p-12 w-full">
      <template #title>
         <h1 class="h1">{{ pageAuthType }}</h1>
      </template>
      <template #content>
         <section>
            <GoogleAuthIcon :authType="pageAuthType" />
            <div class="flex items-center my-10">
               <hr class="flex-1 border-gray-300" />
               <span class="px-4 text-gray-500 uppercase">Or</span>
               <hr class="flex-1 border-gray-300" />
            </div>
            <form @submit.prevent class="flex-form">
               <p>
                  This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll
                  receive a one-time code via email each time you sign in.
               </p>
               <Textbox v-model="email" placeholder="Email" required />
               <Button
                  :label="pageAuthType"
                  submit="submit"
                  @click="onSignupStart"
                  :loading="signingUpLoading"
               />
            </form>
         </section>
      </template>
   </Card>
</template>

<script setup lang="ts">
import GoogleAuthIcon from "@/components/googleAuthIcon/GoogleAuthIcon.vue";
import Card from "primevue/card";
import Textbox from "primevue/inputtext";
import Button from "primevue/button";
import { createCode } from "supertokens-web-js/recipe/passwordless";
import useToast from "@/utils/toast";

const emits = defineEmits(["sendCodeSuccess"]);
const { addToast, toastContent } = useToast();

defineProps<{
   pageAuthType: "Sign in" | "Sign up";
}>();

// data
// -----------------------------------------
const signingUpLoading = ref(false);
const email = ref("mytestemail1235667@gmail.com"); // todo: remove this

// methods
// -----------------------------------------
/** If the email is valid, we will send an OTP code by email */
async function onSignupStart() {
   // TODO: validate email

   try {
      signingUpLoading.value = true;

      const response = await createCode({
         email: email.value,
         shouldTryLinkingWithSessionUser: false, // If true, SuperTokens will attempt to link the passwordless code to an existing session user
         userContext: {}, // Optionally include user context
      });

      console.log("Create code response: ", response);

      // Disabled Sign-Up or Sign-In or invalid configuration etc.
      if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
         addToast({
            severity: "danger",
            summary: toastContent.error.somethingWentWrong.summary,
            detail: toastContent.error.somethingWentWrong.detail,
            error: response,
         });
      }
      // Magic link sent successfully, show the code input field
      else {
         // showMagicInputCode.value = true;
         emits("sendCodeSuccess", true);
      }
   } catch (error: any) {
      // this may be a custom error message sent from the API OR the input email is not valid
      // if (err.isSuperTokensGeneralError === true) {}

      emits("sendCodeSuccess", false);

      addToast({
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error: error,
      });
   } finally {
      signingUpLoading.value = false;
   }
}
</script>

<style scoped></style>
