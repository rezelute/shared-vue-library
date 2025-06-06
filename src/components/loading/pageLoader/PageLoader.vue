<template>
   <div v-if="isLoading" class="w-full" :class="{ 'flex flex-grow items-center justify-center': fillHeight }">
      <div class="spacing-elements p-12">
         <p class="text-xl">{{ loadingText }}</p>
         <ProgressSpinner aria-label="Loading" />
      </div>
   </div>
   <div v-else>
      <slot />
   </div>
</template>

<script setup lang="ts">
import ProgressSpinner from "primevue/progressspinner";

const props = withDefaults(
   defineProps<{
      isLoading: boolean;
      loadingText?: string;
      fillHeight?: boolean;
   }>(),
   {
      isLoading: false,
      loadingText: "",
      fillHeight: false,
   }
);
</script>

<style scoped></style>
