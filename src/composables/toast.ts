// import { useToast as usePrimeToast } from "primevue/usetoast";
import type { ToastServiceMethods } from "primevue/toastservice"
import { messages } from "../content"
//import { type ToastMessageOptions } from "primevue/toast";

const TOAST_CONFIG = {
   DEFAULT_LIFE: 4000,
}

export interface AddToast {
   type: string // ex "unexpected", delete_account_fail ...
   severity: "info" | "warn" | "error" | "success"
   summary: string
   detail?: string
   life?: number
   json?: any
}

export default function useToasting(toast: ToastServiceMethods) {
   // const toast = usePrimeToast();

   function addToast(toastParam: AddToast) {
      const {
         type,
         severity,
         summary,
         detail,
         life = TOAST_CONFIG.DEFAULT_LIFE,
         json = null,
      } = toastParam

      toast.add({
         severity,
         summary,
         detail,
         life,
      })

      // log to sentry
      if (severity === "error" && json) {
         console.error(toastParam)
      }
   }

   return { addToast, messages }
}
