<template>
   <ChangeEmailRequest
      :isEmailSent="isEmailSent"
      v-model:email="email"
      :isLoading="isLoading"
      @submit="handleSubmit"
   />
</template>

<script setup lang="ts">
import { ref } from "vue"
import ChangeEmailRequest from "../src/components/account/ChangeEmailRequest.vue"

const isEmailSent = ref(false)
const email = ref("")
const isLoading = ref(false)

const handleSubmit = async ({ email: newEmail }: { email: string }) => {
   isLoading.value = true
   try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      email.value = newEmail
      isEmailSent.value = true
      // emit success event if needed
   } catch (e) {
      // emit error event if needed
   } finally {
      isLoading.value = false
   }
}

const handleSuccess = () => {
   // handle success
}

const handleError = (err: any) => {
   // handle error
}
</script>
