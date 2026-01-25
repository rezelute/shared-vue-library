<template>
   <Card class="p-10">
      <template #title>
         <h1 class="text-3xl font-semibold text-gray-800 text-center">Oops!</h1>
      </template>
      <template #content>
         <div class="text-center">
            <div class="mx-auto">
               <PageErrorIcon class="mx-auto w-70 h-70 text-primary slow-pulse" />
            </div>

            <p class="mt-4 text-xl">
               {{
                  errorText ||
                  "Something went wrong! We have been notified about this automatically. Try refreshing the page or come back later."
               }}
            </p>

            <Button label="Retry" type="button" class="btn mt-8 w-fit" @click="reloadPage" />
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Card from "primevue/card"
import PageErrorIcon from "../icons/PageErrorIcon.vue"

defineProps<{
   errorText?: string
}>()

// methods
// -----------------------------------------
function reloadPage() {
   window.location.reload()
}
</script>

<style scoped>
@keyframes slow-pulse {
   0%,
   100% {
      opacity: 1;
   }
   50% {
      opacity: 0.5;
   }
}
.slow-pulse {
   animation: slow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
