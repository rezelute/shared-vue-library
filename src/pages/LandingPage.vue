<template>
   <PageLoader :isLoading="false">
      <div class="spacing-page-sections border border-primary-200">
         <div class="w-full border">HERO CONTENT FULL WIDTH</div>
         <div class="bg-primary mt-6 p-2 w-fit border">landing page content (w-fit)</div>
      </div>
   </PageLoader>
</template>

<script setup lang="ts">
import PageLoader from "@/components/pageLoader/PageLoader.vue";
</script>
