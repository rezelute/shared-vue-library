<template>
   <Card class="mt-10">
      <template #header>
         <div class="flex items-center">
            <h2 class="text-2xl font-bold">Landing Page</h2>
         </div>
      </template>
      <template #content>
         <div class="spacing-page-sections border border-primary-200 p-4">
            <div class="w-full border">HERO CONTENT FULL WIDTH</div>
            <div class="bg-primary mt-6 p-2 w-fit border">landing page content (w-fit)</div>
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
</script>
