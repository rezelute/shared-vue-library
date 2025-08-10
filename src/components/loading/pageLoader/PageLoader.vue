<template>
   <Transition name="fade" mode="out-in">
      <div v-if="isLoading" key="loading" class="w-full" role="status" aria-live="polite">
         <div class="spacing-elements p-12">
            <slot name="loadingText">
               <!-- Invisible fallback for accessibility only if no text is provided -->
               <span class="sr-only">Loading...</span>
            </slot>
            <ProgressSpinner aria-label="Loading" />
         </div>
      </div>
      <div v-else key="loaded">
         <slot name="default" />
      </div>
   </Transition>
</template>

<script setup lang="ts">
import ProgressSpinner from "primevue/progressspinner";

withDefaults(
   defineProps<{
      isLoading: boolean;
   }>(),
   {
      isLoading: false,
   }
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}
</style>
