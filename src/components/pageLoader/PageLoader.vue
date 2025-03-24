<template>
   <div class="flex items-center justify-center min-h-screen">
      <ProgressSpinner v-if="isLoading" aria-label="Loading" />
      <slot v-else />
   </div>
</template>

<script setup lang="ts">
import ProgressSpinner from "primevue/progressspinner";

const props = withDefaults(
   defineProps<{
      isLoading: boolean;
   }>(),
   {
      isLoading: false,
   }
);
</script>

<style scoped></style>
