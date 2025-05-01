<template>
   <Card v-if="(!isLoading && (userId || userEmail)) || isLoading">
      <template #title>
         <h2 class="h2">Your details</h2>
      </template>
      <template #content>
         <div v-if="!isLoading" class="spacing-elements">
            <div v-if="userId" class="flex flex-row gap-2">
               <div>ID:</div>
               <div>
                  <code class="text-primary break-all">
                     {{ userId }}
                  </code>
               </div>
            </div>

            <div v-if="userEmail" class="flex flex-row gap-2">
               <div>Email:</div>
               <div>
                  <strong class="text-primary break-all px-2">
                     {{ userEmail }}
                  </strong>
               </div>
            </div>
         </div>
         <!-- loading -->
         <div v-else class="spacing-elements">
            <Skeleton height="2rem"></Skeleton>
            <Skeleton height="2rem"></Skeleton>
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Card from "primevue/card";
import Skeleton from "primevue/skeleton";
import Session from "supertokens-web-js/recipe/session";
import accountService from "../../services/account/accountService";

const userId = ref("");
const userEmail = ref("");
const isLoading = ref(false);

// lifecycle
// -----------------------------------------
onMounted(() => {
   getUserInfo();
});

// methods
// -----------------------------------------
async function getUserInfo() {
   try {
      isLoading.value = true;

      userId.value = await Session.getUserId();
      const response = await accountService.getEmail();

      if (!response.ok) {
         throw new Error(`Error getting user email: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      userEmail.value = data.email;
   } catch (error) {
      // console error but we dont emit an error to the parent, we just hide the whole section
      console.error("Error fetching user getUserInfo: ", error);
   } finally {
      isLoading.value = false;
   }
}
</script>

<style scoped></style>
