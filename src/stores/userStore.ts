import { defineStore } from "pinia"
import { ref } from "vue"

const useUserStore = defineStore("userStore", () => {
   const isSignedIn = ref(false)
   const isFetchingSession = ref(false)

   // Function to check session status
   async function updateAuth(doesSessionExist: boolean) {
      try {
         isFetchingSession.value = true
         isSignedIn.value = doesSessionExist
      } catch (err) {
         isSignedIn.value = false
         console.error("Error checking session status", err)
      } finally {
         isFetchingSession.value = false
      }
   }

   return {
      isFetchingSession,
      isSignedIn,
      updateAuth,
   }
})

export { useUserStore }
