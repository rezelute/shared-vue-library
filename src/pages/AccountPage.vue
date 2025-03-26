<template>
   <PageLoader :isLoading="isPageLoading">
      <div class="container flex items-center justify-center w-full mt-10">
         <div v-if="!deleteToken" class="max-w-xl spacing-sections">
            <h1 class="h1 text-color">Account</h1>
            <ChangeEmail />
            <DeleteAccount />
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
import PageLoader from "@/components/pageLoader/PageLoader.vue";
import Session from "supertokens-web-js/recipe/session";
import useToast from "@/utils/toast";

const { addToast, toastContent } = useToast();
const route = useRoute();

// data
// -----------------------------------------
const isPageLoading = ref(false);
const deleteToken = route.query.del_token as string | undefined;

// lifecycle
// -----------------------------------------
onMounted(() => {
   // check if the user has a deletion token in the URL using vue router
   if (deleteToken) {
      // deleteAccount();
   }
});

// methods
// -----------------------------------------

// send a request to the server to delete the account
async function deleteAccount() {
   try {
      const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/delete-account`, {
         method: "DELETE",
         credentials: "include",
         headers: {
            "X-Delete-Token": deleteToken as string,
            "Content-Type": "application/json",
         },
      });

      const result = await response.json();
      if (!response.ok) {
         throw new Error(result.error || "Failed to delete account.");
      }

      await Session.signOut();
      window.location.href = "/goodbye";
   } catch (error) {
      addToast({
         severity: "danger",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error,
      });

      console.error("Failed to delete account: ", error);
   }
}
</script>

<style lang="scss" scoped></style>
