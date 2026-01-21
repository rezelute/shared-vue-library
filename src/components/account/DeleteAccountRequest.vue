<template>
   <!-- Delete account request -->
   <Card>
      <template #title>
         <slot id="header">
            <h2 class="h2">Delete your account</h2>
         </slot>
      </template>
      <template #content>
         <div v-if="!props.isDeleteEmailSent" class="vstack-form">
            <p>
               You will receive an email to verify your account deletion. Please click on the email
               link to delete your account.
            </p>

            <Button
               label="Send deletion email"
               type="button"
               :loading="props.isLoading"
               @click="sendDeleteEmail"
            />
         </div>

         <ActionConfirmMsg v-else iconClass="pi pi-envelope">
            <p>
               We have sent you an email to verify your account deletion. Please check your inbox
               and click on the verification link.
            </p>
         </ActionConfirmMsg>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Card from "primevue/card"
import ActionConfirmMsg from "../../components/actionConfirmMsg/ActionConfirmMsg.vue"

// props / emits
// -----------------------------------------
const props = defineProps<{
   isDeleteEmailSent: boolean
   isLoading?: boolean
}>()
const emits = defineEmits(["sendDeleteEmail"])

// methods
// -----------------------------------------
function sendDeleteEmail() {
   emits("sendDeleteEmail")
}
</script>

<style scoped></style>
