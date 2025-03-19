<template>
   <div class="container">
      <LoadingState v-if="isLoading" class="loader" />
      <slot v-else />
   </div>
</template>

<script setup lang="ts">
import LoadingState from "@/components/loadingState/LoadingState.vue";

const props = withDefaults(
   defineProps<{
      isLoading: boolean;
   }>(),
   {
      isLoading: false,
   }
);
</script>

<style scoped>
/* .container {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100vh;
   border: 1px solid red;
}

.loader {
   position: absolute;
   top: 50%;
   left: 50%;
   z-index: 101;
   transform: translate(-50%, -50%);
} */
</style>
