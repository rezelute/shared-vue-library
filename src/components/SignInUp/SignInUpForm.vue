<template>
   <Card class="max-w-xl p-12 w-full">
      <template #title>
         <h1 class="h1">{{ pageAuthType === "signUp" ? "Sign Up" : "Sign In" }}</h1>
      </template>
      <template #content>
         <div v-if="signupInviteOnly && pageAuthType === 'signUp'">
            <Message severity="info">
               Sign up is currently by invite only during the beta period.
            </Message>
         </div>
         <section v-else>
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
               <Button
                  :label="pageAuthType === 'signUp' ? 'Sign up' : 'Sign in'"
                  type="button"
                  :loading="isSignUpLoading"
                  data-test="auth-send-code-button"
                  @click="onSignupStart"
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
const emits = defineEmits(["signUpStart", "googleSignIn"])

withDefaults(
   defineProps<{
      pageAuthType: "signIn" | "signUp"
      isSignUpLoading: boolean
      signupInviteOnly?: boolean
      enableThirdPartyAuth?: {
         useGoogle?: boolean
      }
   }>(),
   {
      pageAuthType: "signIn",
      signupInviteOnly: false,
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

/** If the email is valid, we will send an OTP code by email */
async function onSignupStart() {
   isSubmitClicked.value = true

   if (!isEmailValid.value) {
      return
   }

   emits("signUpStart")
}
</script>

<style scoped></style>
