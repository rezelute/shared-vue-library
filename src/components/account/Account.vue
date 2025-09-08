<template>
   <PageLoader :isLoading="isLoading">
      <template #loadingText>
         <span v-if="deleteToken">Deleting your account...</span>
         <span v-else-if="updateEmailToken">Updating your email...</span>
         <span v-else>Loading your account...</span>
      </template>
      <template #default>
         <div v-if="!deleteToken && !updateEmailToken" class="max-w-xl">
            <slot id="header">
               <h1 class="h1 text-color">Your account</h1>
            </slot>

            <div class="vstack-page">
               <UserAccountInfo class="card-p-sm" :updatedEmailDate="updatedEmailDate" />
               <ChangeEmailRequest
                  class="card-p-sm"
                  @changeEmailRequestError="(...args) => $emit('changeEmailRequestError', ...args)"
                  @changeEmailActionSuccess="onChangeEmailActionSuccess"
               />
               <DeleteAccountRequest
                  class="card-p-sm"
                  @deleteAccountRequestError="(...args) => $emit('deleteAccountRequestError', ...args)"
                  @deleteAccountRequestSuccess="(...args) => $emit('deleteAccountRequestSuccess', ...args)"
               />
            </div>
         </div>
      </template>
   </PageLoader>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useDeleteAccount } from "../../composables/account/useDeleteAccount";
import { useUpdateEmail } from "../../composables/account/useUpdateEmail";
import { type EmitNotify } from "../../types";
import PageLoader from "../loading/pageLoader/PageLoader.vue";
import ChangeEmailRequest from "./ChangeEmailRequest.vue";
import DeleteAccountRequest from "./DeleteAccountRequest.vue";
import UserAccountInfo from "./UserAccountInfo.vue";

const emits = defineEmits([
   "deleteAccountRequestError",
   "deleteAccountRequestSuccess",
   "changeEmailRequestError",
   "changeEmailRequestSuccess",
   "changeEmailActionError",
   "changeEmailActionSuccess",
   "deleteAccountError",
   "deleteAccountSuccess",
]);

const props = defineProps<{
   deleteToken?: string | undefined;
   updateEmailToken?: string | undefined;
}>();

// data
// -----------------------------------------
// this is used to tell the UserAccountInfo component to refresh the email after a successful email change
// updates to the latest date and time
const updatedEmailDate = ref<Date | null>(null);
const isLoading = ref(false); // page loader state

// lifecycle
// -----------------------------------------
const { updateEmail } = useUpdateEmail();
const { deleteAccount } = useDeleteAccount();

onMounted(async () => {
   // update email token present, update email and emit success or error events
   if (props.updateEmailToken) {
      isLoading.value = true; // remains true

      await updateEmail(
         props.updateEmailToken,
         (payload: EmitNotify) => emits("changeEmailActionSuccess", payload),
         (payload: EmitNotify) => emits("changeEmailActionError", payload)
      );
   }
   // delete token present, delete account and emit success or error events
   else if (props.deleteToken) {
      isLoading.value = true; // remains true

      await deleteAccount(
         props.deleteToken,
         () => emits("deleteAccountSuccess"),
         (payload: EmitNotify) => emits("deleteAccountError", payload)
      );
   }
});

// methods
// -----------------------------------------
function onChangeEmailActionSuccess(payload: EmitNotify) {
   // update the date to trigger a refresh in UserAccountInfo component
   updatedEmailDate.value = new Date();

   emits("changeEmailActionSuccess", payload);
}
</script>

<style scoped></style>
