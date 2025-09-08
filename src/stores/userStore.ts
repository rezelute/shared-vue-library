import { defineStore } from "pinia";
import Session from "supertokens-web-js/recipe/session";
import { ref } from "vue";

const useUserStore = defineStore("userStore", () => {
   const isSignedIn = ref(false);
   const isFetchingSession = ref(false);

   // Function to check session status
   async function updateAuth() {
      try {
         isFetchingSession.value = true;
         isSignedIn.value = await Session.doesSessionExist();
      } catch (err) {
         isSignedIn.value = false;
         console.error("Error checking session status", err);
      } finally {
         isFetchingSession.value = false;
      }
   }

   return {
      isFetchingSession,
      isSignedIn,
      updateAuth,
   };
});

export { useUserStore };
