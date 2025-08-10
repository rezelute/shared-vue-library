<template>
   <!-- Component loader -->
   <Card>
      <div v-if="isLoading" class="w-full">
         <div class="spacing-elements">
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
import ProgressSpinner from "primevue/progressspinner";
import Card from "primevue/card";

withDefaults(
   defineProps<{
      isLoading: boolean;
   }>(),
   {
      isLoading: false,
   }
);
</script>
