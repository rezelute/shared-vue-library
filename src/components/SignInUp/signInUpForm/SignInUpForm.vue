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

            <form class="spacing-form" @submit.prevent>
               <p>
                  This website offers a Passwordless Sign-In option. Instead of remembering a password, you'll
                  receive a one-time code via email each time you sign in.
               </p>

               <EmailInput
                  v-model:email="email"
                  :isSubmitClicked="isSubmitClicked"
                  @validity-changed="
                     (val) => {
                        console.log('val is now', val);
                        isEmailValid = val;
                     }
                  "
               />

               <Button
                  :label="pageAuthType"
                  submit="submit"
                  :loading="signingUpLoading"
                  @click="onSignupStart"
               />
            </form>
         </section>
      </template>
   </Card>
</template>

<script setup lang="ts">
import GoogleAuthIcon from "../../../components/googleAuthIcon/GoogleAuthIcon.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import { createCode } from "supertokens-web-js/recipe/passwordless";
import toastContent from "../../../content/generic/toastContent";
import EmailInput from "../../../components/account/EmailInput.vue";
import { type EmitNotify } from "../../../types";
// import { usePrimeVue } from "primevue/config";

// onMounted(() => {
//    const primevue = usePrimeVue();
//    console.log("Shared component theme preset", primevue?.config?.theme);
// });

const emits = defineEmits(["sendCodeSuccess", "notify"]);

defineProps<{
   pageAuthType: "Sign in" | "Sign up";
}>();

// data
// -----------------------------------------
const signingUpLoading = ref(false);
const email = ref("mytestemail1235667@gmail.com"); // todo: remove this
const isEmailValid = ref<boolean>(false);
const isSubmitClicked = ref(false);

// methods
// -----------------------------------------
/** If the email is valid, we will send an OTP code by email */
async function onSignupStart() {
   isSubmitClicked.value = true;

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
         emits("notify", {
            type: "sign_in_up_not_allowed",
            severity: "error",
            summary: toastContent.error.somethingWentWrong.summary,
            detail: toastContent.error.somethingWentWrong.detail,
            json: response,
         } satisfies EmitNotify);
      }
      // Magic link sent successfully, show the code input field
      else {
         // showMagicInputCode.value = true;
         emits("sendCodeSuccess", true);
      }
   } catch (error: any) {
      // this may be a custom error message sent from the API OR the input email is not valid
      // if (err.isSuperTokensGeneralError === true) {}

      emits("notify", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: error,
      } satisfies EmitNotify);
   } finally {
      signingUpLoading.value = false;
   }
}
</script>

<style scoped></style>
