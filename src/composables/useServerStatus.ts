import { type Ref, ref } from "vue"

export default function useServerStatus(apiUrl: string) {
   const isHealthy = ref(false)
   const isLoading: Ref<boolean> = ref(false)

   async function checkServerHealth() {
      try {
         isLoading.value = true

         const response = await fetch(apiUrl, { method: "HEAD" })
         if (!response.ok) throw new Error("Server is down")

         isHealthy.value = true
      } catch (err) {
         console.error(err)
         isHealthy.value = false
      } finally {
         isLoading.value = false
      }
   }

   return { checkServerHealth, isHealthy, isLoading }
}
