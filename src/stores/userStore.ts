import { defineStore } from "pinia";
import Session from "supertokens-web-js/recipe/session";

const useUserStore = defineStore("userStore", () => {
   const isSignedIn = ref(false);

   // Function to check session status
   async function updateAuth() {
      isSignedIn.value = await Session.doesSessionExist();
   }

   return {
      isSignedIn,
      updateAuth,
   };
});

export { useUserStore };
