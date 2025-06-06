<template>
   <!-- Component loader -->
   <Card>
      <template #content>
         <div class="spacing-elements">
            <slot name="loadingText">
               <p class="text-2xl">Loading...</p>
            </slot>
            <Spinner />
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Spinner from "primevue/progressspinner";
import Card from "primevue/card";
</script>
