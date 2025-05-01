<template>
   <div v-if="!deleteToken" class="max-w-xl">
      <slot id="header">
         <h1 class="h1 text-color">Your account</h1>
      </slot>

      <div class="spacing-page-sections">
         <UserAccountInfo />
         <ChangeEmail @error="(...args) => $emit('changeEmailError', ...args)" />
         <DeleteAccountRequest @error="(...args) => $emit('deleteAccountRequestError', ...args)" />
      </div>
   </div>
   <div v-else>
      <DeleteAccountAction
         :deleteToken="deleteToken"
         @error="(...args) => $emit('deleteAccountError', ...args)"
      />
   </div>
</template>

<script setup lang="ts">
import ChangeEmail from "./ChangeEmail.vue";
import DeleteAccountRequest from "./DeleteAccountRequest.vue";
import DeleteAccountAction from "./DeleteAccountAction.vue";
import UserAccountInfo from "./UserAccountInfo.vue";

defineProps<{
   deleteToken?: string | undefined;
}>();
</script>

<style scoped></style>
