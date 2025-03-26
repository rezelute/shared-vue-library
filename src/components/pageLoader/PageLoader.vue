<template>
   <div v-if="isLoading" class="flex flex-grow items-center justify-center w-full">
      <ProgressSpinner aria-label="Loading" />
   </div>
   <div v-else class="w-full">
      <slot />
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
