<template>
   <div class="flex flex-col gap-1">
      <label v-if="label" :for="id" class="font-medium">{{ label }}</label>
      <p v-if="helper" class="text-sm text-gray-500">{{ helper }}</p>

      <div class="mt-1">
         <slot v-if="!showSkeleton" />
         <Skeleton v-else width="100%" :height="skeletonHeight" />
      </div>

      <Message
         v-if="error"
         :data-test="`${id}-error-message`"
         class="mt-1"
         severity="error"
         size="small"
         variant="simple"
      >
         {{ error }}
      </Message>
   </div>
</template>

<script setup lang="ts">
import { Skeleton } from "primevue"
import Message from "primevue/message"

interface FormFieldProps {
   id?: string
   label?: string
   helper?: string
   error?: string
   showSkeleton?: boolean
   skeletonHeight?: string
}

withDefaults(defineProps<FormFieldProps>(), {
   showSkeleton: false,
   skeletonHeight: "45px",
})
</script>
