<template>
   <PageLoader :isLoading="isPageLoading">
      <div v-if="!deleteToken">
         <h1>Account</h1>
         <p>This is your account page.</p>

         <!-- Change email -->
         <section>
            <h2>Change your email</h2>
            <p>
               You will receive an email to your old email to verify your new email address. Please click on
               the email link to update your email.
            </p>
            <form @submit.prevent="sendChangeEmail">
               <label for="email">New email</label>
               <input v-model="userNewEmail" type="email" id="email" name="email" required />
               <button type="submit">Change email</button>
            </form>
         </section>

         <!-- Delete account -->
         <section>
            <h2>Delete your account</h2>
            <div v-if="!isDeleteEmailSent">
               <p>
                  You will receive an email to verify your account deletion. Please click on the email link to
                  delete your account.
               </p>

               <button type="submit" @click="sendDeleteEmail">Send deletion email</button>
            </div>
            <div v-else>
               <p>
                  We have sent you an email to verify your account deletion. Please check your inbox and click
                  on the verification link.
               </p>
            </div>
         </section>

         <Toaster :title="toastInfo.title" :isOpen="toastInfo.open">
            <template #description>
               <p>{{ toastInfo.description }}</p>
            </template>
         </Toaster>
      </div>
   </PageLoader>
</template>

<script setup lang="ts">
import Toaster from "@/components/toaster/Toaster.vue";
import PageLoader from "@/components/pageLoader/PageLoader.vue";
import Session from "supertokens-web-js/recipe/session";

const isPageLoading = ref(true);
const route = useRoute();
const deleteToken = route.query.del_token as string | undefined;
const isDeleteEmailSent = ref(false);
const toastInfo = ref({
   open: false,
   title: "",
   description: "",
});
const userNewEmail = ref("");

// lifecycle
// -----------------------------------------
onMounted(() => {
   // check if the user has a deletion token in the URL using vue router
   if (deleteToken) {
      deleteAccount();
   }
});

// methods
// -----------------------------------------
// send a request to the server to send a deletion email
async function sendDeleteEmail() {
   try {
      const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/request-delete`, {
         method: "POST",
         credentials: "include",
      });

      const result = await response.json();
      if (!response.ok) {
         throw new Error(result.error || "Failed to send deletion email.");
      }

      if (!response.ok) {
         throw new Error(result.error || "Failed to send deletion email.");
      }

      isDeleteEmailSent.value = true;
   } catch (error) {
      isDeleteEmailSent.value = false;

      toastInfo.value = {
         open: true,
         title: "Error",
         description: "Something went wrong, please try again later. We have been notified of the issue.",
      };

      if (error instanceof Error) {
         console.error(`Error sending deletion email: ${error.message}`);
      } else {
         console.error("Error sending deletion email: Unknown error occurred");
      }
   }
}

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
      toastInfo.value = {
         open: true,
         title: "Error",
         description: "Something went wrong, please try again later. We have been notified of the issue.",
      };

      console.error("Failed to delete account: ", error);
   }
}

// change the user's email
async function sendChangeEmail() {
   try {
      const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/change-email`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         credentials: "include",
         body: JSON.stringify({ email: userNewEmail.value }),
      });

      const result = await response.json();

      if (!response.ok) {
         throw new Error(result.message || "Failed to update email");
      }

      console.log("✅ Email change request sent:", result.message);
   } catch (error) {
      console.error("Error updating email:", error);
   }
}
</script>

<style lang="scss" scoped></style>
