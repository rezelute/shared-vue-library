<template>
   <div class="flex flex-col items-center gap-4 text-center">
      <i
         :class="iconClass"
         class="border-2 p-4 rounded-full text-primary"
         style="font-size: 1.2rem !important"
      />

      <div class="flex flex-col gap-2">
         <slot></slot>
      </div>
   </div>
</template>

<script setup lang="ts">
defineProps<{
   iconClass: string
}>()
</script>

<style scoped></style>
