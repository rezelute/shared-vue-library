<template>
   <div class="px-4 py-8 sm:p-8">
      <Card class="max-w-xl p-0 sm:p-12 w-full mx-auto">
         <template #title>
            <div class="flex flex-col items-stretch gap-4 sm:flex-row sm:items-start">
               <!-- reset sign in/up process -->
               <Button
                  class="me-4 sm:me-0"
                  type="button"
                  variant="outlined"
                  icon="pi pi-arrow-left"
                  aria-label="Start over"
                  data-test="auth-change-email"
                  @click="onRestartFlow"
               />
               <h1 class="h1 mt-0 sm:mt-0">Input validation code</h1>
            </div>
         </template>
         <template #content>
            <form class="vstack-lg" @submit.prevent>
               <!-- Code input & Submit -->
               <div class="vstack-form">
                  <p>
                     To finish the {{ pageAuthType === "signUp" ? "signup" : "signin" }} process,
                     enter the code that was emailed to you. Note that the code is only valid for 10
                     minutes.
                  </p>

                  <FormField
                     id="magic-code-input"
                     :error="showError ? codeValidationMessage : ''"
                     data-test="auth-error-message"
                  >
                     <InputOtp
                        id="magic-code-input"
                        v-model="userMagicCode"
                        :length="6"
                        class="w-50"
                        type="text"
                        placeholder="Input email code"
                        required
                        :invalid="showError"
                        data-test="auth-code-input"
                     />
                  </FormField>
                  <Button
                     label="Submit code"
                     class="w-fit"
                     type="submit"
                     :loading="isSubmittingCode || isResendingCode"
                     data-test="auth-verify-button"
                     @click="onCodeSubmit"
                  />
               </div>

               <!-- Code re-send -->
               <div class="vstack-form">
                  <p>
                     If you didnt receive an email, please check your Junk folder or resend another
                     code.
                  </p>
                  <Button
                     class="w-fit"
                     label="Resend code"
                     type="submit"
                     :loading="isSubmittingCode || isResendingCode"
                     data-test="auth-resend-code"
                     @click="onResendCode"
                  />
               </div>
            </form>
         </template>
      </Card>
   </div>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Card from "primevue/card"
import InputOtp from "primevue/inputotp"
import { computed, ref } from "vue"
import FormField from "../../components/formField/FormField.vue"

// props & emits
// -----------------------------------------
const emits = defineEmits(["codeSubmit", "codeResendSubmit", "restartFlow"])
const props = defineProps<{
   pageAuthType: "signIn" | "signUp"
   codeInputErrorMessage?: string // invalid code error message from parent (e.g. server responded with invalid code)
   isSubmittingCode: boolean
   isResendingCode: boolean
}>()

// state
// -----------------------------------------
const userMagicCode = ref("") // user input code
const isSubmitClicked = ref(false) // To show validation errors

// computed
// -----------------------------------------
const isCodeLengthValid = computed(() => {
   return userMagicCode.value.length === 6
})

const codeValidationMessage = computed(() => {
   if (!isCodeLengthValid.value) {
      return "The code must be 6 characters long."
   }
   if (props.codeInputErrorMessage) {
      return props.codeInputErrorMessage
   }
   return ""
})

const showError = computed(() => {
   return isSubmitClicked.value && codeValidationMessage.value.length > 0
})

// methods
// -----------------------------------------
/** If the code is valid, we tell the parent so it can redirect to the home page  */
async function onCodeSubmit() {
   isSubmitClicked.value = true

   // if the code is not valid, do not emit
   if (!isCodeLengthValid.value) {
      return
   }

   emits("codeSubmit", userMagicCode.value)
}

//** Resend OTP code which might have not been received by the user */
async function onResendCode() {
   emits("codeResendSubmit")
}

function onRestartFlow() {
   emits("restartFlow")
}
</script>

<style scoped></style>
