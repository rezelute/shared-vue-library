<template>
   <Card v-if="(!isLoading && (userId || userEmail)) || isLoading">
      <template #title>
         <h2 class="h2">Your details</h2>
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
import Card from "primevue/card";
import Skeleton from "primevue/skeleton";
import Session from "supertokens-web-js/recipe/session";
import { onMounted, ref, watch } from "vue";
import toastContent from "../../content/generic/toastContent";
import accountService from "../../services/account/accountService";
import { type EmitNotify } from "../../types";
import normalizeError from "../../utils/error/normalizeError.util";

const emits = defineEmits(["getUserIdError", "getUserEmailError"]);

const userId = ref("");
const userEmail = ref("");
const isLoading = ref(false);

// lifecycle
// -----------------------------------------
const props = defineProps<{
   updatedEmailDate?: Date | null; // optional prop to trigger email refresh
}>();

onMounted(async () => {
   await getUserId();
   await getUserEmail();
});

watch(
   () => props.updatedEmailDate,
   async () => {
      await getUserEmail();
   }
);
// methods
// -----------------------------------------
async function getUserEmail() {
   try {
      isLoading.value = true;
      const { data } = await accountService.getEmail();
      userEmail.value = data.email;
   } catch (err) {
      // emit to the parent so it can log the error
      emits("getUserEmailError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
   } finally {
      isLoading.value = false;
   }
}

async function getUserId() {
   try {
      isLoading.value = true;
      userId.value = await Session.getUserId();
   } catch (err) {
      // emit to the parent so it can log the error
      emits("getUserIdError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
   } finally {
      isLoading.value = false;
   }
}
</script>

<style scoped></style>
