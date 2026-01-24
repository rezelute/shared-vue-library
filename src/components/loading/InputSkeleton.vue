<template>
   <div>
      <slot v-if="!props.isLoading" />
      <Skeleton v-else :width="width" :height="height" />
   </div>
</template>

<script setup lang="ts">
import Skeleton from "primevue/skeleton"

const props = withDefaults(
   defineProps<{
      isLoading: boolean
      height?: string
      width?: string
   }>(),
   {
      isLoading: false,
      height: "40px",
      width: "100%",
   }
)
</script>
