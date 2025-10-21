<template>
   <!-- <Card class="mt-10">
      <template #header>
         <div class="flex items-center">
            <h2 class="text-2xl font-bold">Landing Page</h2>
         </div>
      </template>
      <template #content>
         <div class="vstack-page border border-primary-200 p-4">
            <div class="w-full border">HERO CONTENT FULL WIDTH</div>
            <div class="bg-primary mt-6 p-2 w-fit border">landing page content (w-fit)</div>
         </div>
      </template>
   </Card> -->

   <PageLoader :isLoading="false" :isError="true"> test </PageLoader>
</template>

<script setup lang="ts">
// import Card from "primevue/card";
import PageLoader from "@/components/loading/pageLoader/PageLoader.vue";
</script>
