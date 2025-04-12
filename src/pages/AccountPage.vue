<template>
   <PageLoader :isLoading="isPageLoading">
      <div class="container flex items-center justify-center w-full">
         <div v-if="!deleteToken" class="max-w-xl">
            <h1 class="h1 text-color">Your account</h1>

            <div class="spacing-page-sections">
               <YourAccount />
               <ChangeEmail />
               <DeleteAccount />
            </div>
         </div>
         <div v-else>
            <Card>
               <template #content>
                  <div class="spacing-elements p-12">
                     <p class="text-2xl">Deleting your account...</p>
                     <Spinner />
                  </div>
               </template>
            </Card>
         </div>
      </div>
   </PageLoader>
</template>

<script setup lang="ts">
import Spinner from "primevue/progressspinner";
import Card from "primevue/card";
import ChangeEmail from "@/components/account/changeEmail/ChangeEmail.vue";
import DeleteAccount from "@/components/account/deleteAccount/DeleteAccount.vue";
import YourAccount from "@/components/account/yourAccount/YourAccount.vue";
import PageLoader from "@/components/pageLoader/PageLoader.vue";
import Session from "supertokens-web-js/recipe/session";
import useToast from "@/utils/toast";
import accountService from "@/services/account/accountService";

const { addToast } = useToast();
const route = useRoute();

// data
// -----------------------------------------
const isPageLoading = ref(false);
const deleteToken = ref(route.query.del_token as string | undefined);

// lifecycle
// -----------------------------------------
onMounted(() => {
   // check if the user has a deletion token in the URL using vue router
   if (deleteToken.value) {
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
      const response = await accountService.deleteAccount(deleteToken.value as string);

      // If the response status is not OK (not in the 2xx range)
      if (!response.ok) {
         throw new Error(`Error deleting account: ${response.status} - ${response.statusText}`);
      }

      // If the response is OK, we can proceed with the deletion
      await Session.signOut();
      window.location.href = "/goodbye";
   } catch (error) {
      addToast({
         severity: "error",
         summary: deleteAccountErrorSummary,
         detail: deleteAccountErrorDetail,
         life: 0,
         error: { msg: "Failed to delete user account", error },
      });

      deleteToken.value = undefined;
   }
}
</script>

<style scoped></style>
