import { defineStore } from "pinia";
import Session from "supertokens-web-js/recipe/session";

const useUserStore = defineStore("userStore", () => {
   const isSignedIn = ref(false);

   // user theme
   const lsTheme = localStorage.getItem("theme") || "light";
   const theme = ref(lsTheme);
   document.documentElement.classList.toggle("dark", lsTheme === "dark");

   function toggleTheme() {
      const newTheme = theme.value === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Save theme preference to local storage
      theme.value = newTheme;
      document.documentElement.classList.toggle("dark", newTheme === "dark");
   }

   // Function to check session status
   async function updateAuth() {
      isSignedIn.value = await Session.doesSessionExist();
   }

   return {
      isSignedIn,
      updateAuth,
      theme,
      toggleTheme,
   };
});

export { useUserStore };
