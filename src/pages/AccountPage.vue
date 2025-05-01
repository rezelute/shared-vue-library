<template>
   <div class="container flex items-center justify-center w-full">
      <Account
         :deleteToken="deleteToken"
         @changeEmailError="onChangeEmailError"
         @deleteAccountRequestError="onDeleteAccountRequestError"
         @deleteAccountError="onDeleteAccountError"
      />
   </div>
</template>

<script setup lang="ts">
import Account from "../components/account/Account.vue";
import useToast from "../composables/toast";

const { addToast } = useToast();
const route = useRoute();

// data
// -----------------------------------------
const deleteToken = ref(route.query.del_token as string | undefined);

// methods
// -----------------------------------------
function onChangeEmailError(error: EmitError) {
   addToast({
      severity: "error",
      summary: error.summary,
      detail: error.detail,
      life: 0,
      error,
   });
}

function onDeleteAccountRequestError(error: EmitError) {
   addToast({
      severity: "error",
      summary: error.summary,
      detail: error.detail,
      life: 0,
      error,
   });
}

function onDeleteAccountError(error: EmitError) {
   addToast({
      severity: "error",
      summary: error.summary,
      detail: error.detail,
      life: 0,
      error,
   });

   deleteToken.value = undefined;
}
</script>

<style scoped></style>
