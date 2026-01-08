import { type Ref, ref } from "vue"

export default function useServerStatus(apiDomainUrl: string) {
   const connectionReady = ref(false)

   async function checkServer(isLoading: Ref<boolean>) {
      try {
         isLoading.value = true

         const response = await fetch(apiDomainUrl, { method: "HEAD" })
         if (!response.ok) throw new Error("Server is down")

         connectionReady.value = true
      } catch (err) {
         console.error(err)
         connectionReady.value = false
      } finally {
         isLoading.value = false
      }
   }

   return { checkServer, connectionReady }
}
