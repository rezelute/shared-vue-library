<template>
   <!-- Delete account action -->
   <Card>
      <template #content>
         <div class="spacing-elements p-12">
            <p class="text-2xl">Deleting your account...</p>
            <Spinner />
         </div>
      </template>
   </Card>
</template>

<script setup lang="ts">
import Spinner from "primevue/progressspinner";
import Card from "primevue/card";
import Session from "supertokens-web-js/recipe/session";
import accountService from "../../services/account/accountService";

const emits = defineEmits(["error"]);
const props = defineProps<{
   deleteToken: string;
}>();

// lifecycle
// -----------------------------------------
onMounted(() => {
   // check if the user has a deletion token in the URL using vue router
   if (props.deleteToken) {
      deleteAccount();
   }
});

// methods
// -----------------------------------------
// send a request to the server to delete the account
async function deleteAccount() {
   const deleteAccountErrorSummary = "We failed to delete your account!";
   const deleteAccountErrorDetail =
      "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";

   try {
      const response = await accountService.deleteAccount(props.deleteToken as string);

      // If the response status is not OK (not in the 2xx range)
      if (!response.ok) {
         throw new Error(`Error deleting account: ${response.status} - ${response.statusText}`);
      }

      // If the response is OK, we can proceed with the deletion
      await Session.signOut();
      window.location.href = "/goodbye";
   } catch (error) {
      emits("error", {
         type: "unexpected",
         summary: deleteAccountErrorSummary,
         detail: deleteAccountErrorDetail,
         error,
      });
   }
}
</script>

<style scoped></style>
