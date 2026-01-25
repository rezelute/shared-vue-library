<template>
   <Transition name="fade" mode="out-in">
      <!-- Loading State -->
      <div v-if="showLoading" key="loading" class="w-full" role="status" aria-live="polite">
         <div class="vstack-sm p-12">
            <slot name="preloader">
               <!-- Fallback preloader if no slot provided -->
               <ProgressSpinner aria-label="Loading" />

               <!-- loading text (visible or accessible) -->
               <div v-if="loadingText" class="text-center mt-4">
                  {{ loadingText }}
               </div>
               <!-- Invisible fallback for accessibility only if no text is provided -->
               <span v-else class="sr-only">Loading...</span>
            </slot>
         </div>
      </div>

      <!-- Error State -->
      <div v-else-if="showError" key="error" class="items-center justify-center">
         <slot name="error">
            <!-- Fallback error if no slot provided -->
            <AppInfoError :errorText="errorText" class="max-w-xl mx-auto" />
         </slot>
      </div>

      <!-- Success State -->
      <div v-else key="loaded">
         <slot name="default" />
      </div>
   </Transition>
</template>

<script setup lang="ts">
import ProgressSpinner from "primevue/progressspinner"
import AppInfoError from "../appErrorInfo/AppErrorInfo.vue"

export interface PageLoaderProps {
   showLoading?: boolean
   loadingText?: string
   showError?: boolean
   errorText?: string // if you dont use the error slot, you can use this prop to show custom error text
}

withDefaults(defineProps<PageLoaderProps>(), {
   showLoading: false,
   showError: false,
})
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
