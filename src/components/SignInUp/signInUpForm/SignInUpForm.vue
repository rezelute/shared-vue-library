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
            <form @submit.prevent class="spacing-form">
               <p>
                  This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll
                  receive a one-time code via email each time you sign in.
               </p>
               <div>
                  {{ isEmailValid }}
                  <Textbox
                     v-model="email"
                     :invalid="!isEmailValid"
                     placeholder="Email"
                     required
                     class="w-full"
                  />
                  <Message v-if="isEmailValid === false" severity="error" size="small" variant="simple">
                     {{ emailInvalidText }}
                  </Message>
               </div>
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
import GoogleAuthIcon from "../../../components/googleAuthIcon/GoogleAuthIcon.vue";
import Card from "primevue/card";
import Textbox from "primevue/inputtext";
import Button from "primevue/button";
import { createCode } from "supertokens-web-js/recipe/passwordless";
import toastContent from "../../../content/generic/toastContent";
import { validateEmail } from "../../../utils/validation";
import Message from "primevue/message";

const emits = defineEmits(["sendCodeSuccess", "error"]);

defineProps<{
   pageAuthType: "Sign in" | "Sign up";
}>();

// data
// -----------------------------------------
const signingUpLoading = ref(false);
const email = ref("mytestemail1235667@gmail.com"); // todo: remove this
const isEmailValid = ref<boolean | null>(null);
const emailInvalidText = "Please enter a valid email address";

// methods
// -----------------------------------------
/** If the email is valid, we will send an OTP code by email */
async function onSignupStart() {
   isEmailValid.value = validateEmail(email.value);
   if (!isEmailValid.value) {
      return;
   }

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
         emits("error", {
            type: "sign_in_up_not_allowed",
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

      emits("error", {
         type: "unexpected",
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
