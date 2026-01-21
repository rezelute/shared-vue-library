<template>
   <div class="dialog-loader">
      <Dialog
         :visible="visible"
         :modal="true"
         :dismissableMask="false"
         :closable="false"
         :showHeader="true"
         :header="headerText"
         :showFooter="false"
         :closeOnEscape="false"
         pt:mask:style="background-color: rgba(0, 0, 0, 0.9) !important"
      >
         <div class="flex flex-col justify-center">
            <ProgressSpinner />
            <div v-if="loadingText" class="mt-8 text-center">{{ loadingText }}</div>
         </div>
      </Dialog>
   </div>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog"
import ProgressSpinner from "primevue/progressspinner"

defineProps<{
   visible: boolean
   headerText: string
   loadingText?: string
}>()
</script>

<style scoped></style>
