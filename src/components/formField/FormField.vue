<template>
   <div class="flex flex-col gap-1">
      <label v-if="label" :for="id" class="font-medium">{{ label }}</label>
      <p v-if="helper" class="text-sm text-gray-500">{{ helper }}</p>

      <div class="mt-1">
         <slot />
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
import Message from "primevue/message"

defineProps<{
   id: string
   label?: string
   helper?: string
   error?: string
}>()
</script>
