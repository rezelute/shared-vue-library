import { useToast as usePrimeToast } from "primevue/usetoast";
import toastContent from "@/content/generic/toastContent";

import { type ToastMessageOptions } from "primevue/toast";
import type { ToastServiceMethods } from "primevue/toastservice";

const TOAST_CONFIG = {
   DEFAULT_LIFE: 4000,
};

interface AddToast extends ToastMessageOptions {
   toast: ToastServiceMethods;
   error?: any;
}

export default function useToast() {
   const toast = usePrimeToast();

   function addToast({
      severity,
      summary,
      detail,
      life = TOAST_CONFIG.DEFAULT_LIFE,
      error,
   }: Omit<AddToast, "toast">) {
      toast.add({
         severity,
         summary,
         detail,
         life,
      });

      // log to sentry
      if (severity === "danger" && error) {
         console.error(error);
      }
   }

   return { addToast, toastContent };
}
