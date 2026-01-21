<template>
   <Card>
      <template #title>
         <slot id="header">
            <h2 class="h2">Change your email</h2>
         </slot>
      </template>
      <template #content>
         <!-- Change email form -->
         <div v-if="!isEmailSent">
            <form class="vstack-form" @submit.prevent="onRequestEmailChange">
               <EmailInput
                  v-model:email="email"
                  :isSubmitClicked="isSubmitClicked"
                  labelText="Enter your new email"
                  @validity-changed="onValidityChanged"
               />
               <p class="text-sm">
                  You will receive an email to your old email to verify your new email address.
                  Please click on the email link to update your email.
               </p>
               <Button label="Change email" type="submit" :loading="isLoading" />
            </form>
         </div>
         <!-- Email sent -->
         <ActionConfirmMsg v-else iconClass="pi pi-envelope" class="w-full max-w-lg mx-auto">
            <p>
               <span class="block text-wrap">We have sent a verification email to:</span>
               <strong class="text-primary break-all px-2">{{ email }}</strong>
               <span class="block mt-8">
                  Please check the inbox of your new email and click on the verification link to
                  change your email.
               </span>
            </p>
         </ActionConfirmMsg>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Card from "primevue/card"
import { ref } from "vue"
import EmailInput from "../../components/account/EmailInput.vue"
import ActionConfirmMsg from "../../components/actionConfirmMsg/ActionConfirmMsg.vue"

// props / emits
// -----------------------------------------
const emits = defineEmits(["requestEmailChange"])
const props = defineProps<{
   isEmailSent: boolean
   isLoading?: boolean
}>()

// models
// -----------------------------------------
const email = defineModel<string>("email", { default: "" })

// state
// -----------------------------------------
const isSubmitClicked = ref(false)
const isEmailValid = ref(false)

// methods
// -----------------------------------------
function onValidityChanged(val: boolean) {
   isEmailValid.value = val
}

function onRequestEmailChange() {
   isSubmitClicked.value = true
   if (!isEmailValid.value) return

   emits("requestEmailChange", { email: email.value })
}
</script>

<style scoped></style>
