<template>
   <Card class="max-w-xl p-12 w-full">
      <template #title>
         <h1 class="h1">{{ pageAuthType === "sign-up" ? "Sign Up" : "Sign In" }}</h1>
      </template>
      <template #content>
         <Message v-if="isSignupInviteOnly" class="mb-6" severity="info">
            Sign up is currently by invite only during the beta period as we roll things out in
            stages and gather early feedback.
         </Message>
         <section v-if="(isSignupInviteOnly && pageAuthType === 'sign-in') || !isSignupInviteOnly">
            <GoogleAuthIcon
               v-if="enableThirdPartyAuth?.useGoogle"
               :authType="pageAuthType"
               @signInClick="$emit('googleSignIn')"
            />

            <div v-if="enableThirdPartyAuth" class="flex items-center my-10">
               <hr class="flex-1 border-gray-300" />
               <span class="px-4 text-gray-500 uppercase">Or</span>
               <hr class="flex-1 border-gray-300" />
            </div>

            <form class="vstack-form" data-test="auth-form" @submit.prevent>
               <p class="mb-2">
                  This website offers a Passwordless Sign-In option. Instead of remembering a
                  password, you'll receive a one-time code via email each time you sign in.
               </p>
               <EmailInput
                  v-model:email="email"
                  :isSubmitClicked="isSubmitClicked"
                  data-test="auth-email-input"
                  @validity-changed="onValidityChanged"
               />

               <!-- additional fields like: captcha (expose isSubmitClicked to parent) -->
               <slot name="additional-fields" :isSubmitClicked="isSubmitClicked" />

               <Button
                  :label="pageAuthType === 'sign-up' ? 'Sign up' : 'Sign in'"
                  type="button"
                  :loading="isSignupLoading"
                  data-test="auth-send-code-button"
                  @click="onSubmit"
               />
            </form>
         </section>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Card from "primevue/card"
import Message from "primevue/message"
import { ref } from "vue"
import EmailInput from "../../components/account/EmailInput.vue"
import GoogleAuthIcon from "../../components/googleAuthIcon/GoogleAuthIcon.vue"

// props/emits
// -----------------------------------------
const emits = defineEmits(["submit", "googleSignIn"])

withDefaults(
   defineProps<{
      pageAuthType: "sign-in" | "sign-up"
      isSignupLoading: boolean
      isSignupInviteOnly?: boolean
      enableThirdPartyAuth?: {
         useGoogle?: boolean
      }
   }>(),
   {
      pageAuthType: "sign-in",
   }
)

// models
// -----------------------------------------
const email = defineModel<string>("email", { required: true })

// state
// -----------------------------------------
const isEmailValid = ref<boolean>(false)
const isSubmitClicked = ref(false) // To show validation errors

// methods
// -----------------------------------------
function onValidityChanged(isValid: boolean) {
   isEmailValid.value = isValid
}

/** If the email is valid, emit but only if valid */
async function onSubmit() {
   isSubmitClicked.value = true

   emits("submit", {
      email: email.value,
      isValid: isEmailValid.value, // Only validates email - additional fields are handled in the parent
   })
}
</script>

<style scoped></style>
