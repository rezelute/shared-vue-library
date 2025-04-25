<template>
   <div class="flex flex-grow items-center justify-center w-full">
      <SignInUp @error="onSignInUpError" />
   </div>
</template>

<script setup lang="ts">
import SignInUp from "../components/SignInUp/SignInUp.vue";
import useToast from "@/composables/toast";

const { addToast } = useToast();

function onSignInUpError(param: EmitError) {
   addToast({
      severity: "error",
      summary: param.summary,
      detail: param.detail,
      life: 0,
      error: param.error,
   });
}
</script>

<style scoped></style>
