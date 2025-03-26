<template>
   <Card class="p-10">
      <template #title>
         <h2 class="text-4xl font-semibold text-gray-800 text-center">
            Oops <i class="text-4xl not-italic">🥲</i>
         </h2>
      </template>
      <template #content>
         <p class="mt-10 text-xl">
            Something went wrong! We have been notified about this. In the meantime, please try visiting the
            <a href="/" class="underline">homepage</a> or try again later.
         </p>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";

const props = defineProps<{
   error: any;
}>();

onMounted(() => {
   console.error("App error: ", props.error);
});
</script>
