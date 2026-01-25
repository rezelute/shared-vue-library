<template>
   <Card class="p-10">
      <template #title>
         <h2 class="text-4xl font-semibold text-gray-800 text-center">
            Oops <i class="text-4xl not-italic">🥲</i>
         </h2>
      </template>
      <template #content>
         <p class="mt-10 text-xl">
            Something went wrong! We have been notified about this automatically. Try refreshing the
            page or come back later.
         </p>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card"

defineProps<{
   error: any
}>()
</script>
