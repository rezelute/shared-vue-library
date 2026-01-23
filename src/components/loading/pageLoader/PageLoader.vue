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
      <div v-else-if="showError" key="error" class="w-full">
         <slot name="error">
            <!-- Fallback error if no slot provided -->
            <div class="vstack-sm p-12 text-center items-center">
               <div class="w-96">
                  <PageErrorIcon />
               </div>
               <p>Something went wrong, please try again later.</p>
               <Button label="Retry" type="button" class="btn mt-4 w-fit" @click="$emit('retry')" />
            </div>
         </slot>
      </div>

      <!-- Success State -->
      <div v-else key="loaded">
         <slot name="default" />
      </div>
   </Transition>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import ProgressSpinner from "primevue/progressspinner"
import PageErrorIcon from "../../icons/PageErrorIcon.vue"

withDefaults(
   defineProps<{
      showLoading: boolean
      loadingText?: string
      showError?: boolean
   }>(),
   {
      showLoading: false,
      showError: false,
   }
)

defineEmits(["retry"])
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
