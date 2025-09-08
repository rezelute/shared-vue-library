<template>
   <!-- Component loader -->
   <Card>
      <div v-if="isLoading" class="w-full">
         <div class="vstack-sm">
            <slot name="loadingText"></slot>
            <ProgressSpinner aria-label="Loading" />
         </div>
      </div>
      <div v-else>
         <slot name="default" />
      </div>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
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
