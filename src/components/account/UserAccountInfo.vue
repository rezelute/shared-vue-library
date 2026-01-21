<template>
   <Card>
      <template #title>
         <slot id="header">
            <h2 class="h2 text-color">Your details</h2>
         </slot>
      </template>
      <template #content>
         <div v-if="!isLoading" class="vstack-sm">
            <div v-if="userId" class="flex flex-col sm:flex-row gap-0 sm:gap-2">
               <div class="block sm:flex font-bold">
                  <span>ID</span>
                  <span class="hidden sm:block">:</span>
               </div>
               <div>
                  <code class="text-primary break-all">
                     {{ userId }}
                  </code>
               </div>
            </div>

            <div v-if="userEmail" class="flex flex-col sm:flex-row gap-0 sm:gap-2">
               <div class="block sm:flex font-bold">
                  <span>Email</span>
                  <span class="hidden sm:block">:</span>
               </div>
               <div>
                  <strong class="text-primary break-all sm:pl-2">
                     {{ userEmail }}
                  </strong>
               </div>
            </div>
         </div>
         <!-- loading -->
         <div v-else class="vstack-sm">
            <Skeleton height="2rem"></Skeleton>
            <Skeleton height="2rem"></Skeleton>
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card"
import Skeleton from "primevue/skeleton"

// lifecycle
// -----------------------------------------
const props = defineProps<{
   isLoading: boolean
   userId: string
   userEmail: string
}>()
</script>

<style scoped></style>
