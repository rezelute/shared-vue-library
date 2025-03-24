import { type ToastMessageOptions } from "primevue/toast";
import type { ToastServiceMethods } from "primevue/toastservice";

const TOAST_CONFIG = {
   DEFAULT_LIFE: 3000,
};

interface AddToast extends ToastMessageOptions {
   toast: ToastServiceMethods;
   logInfo?: { summary?: string; error: unknown };
}

export default function addToast({
   toast,
   severity,
   summary,
   detail,
   life = TOAST_CONFIG.DEFAULT_LIFE,
   logInfo,
}: AddToast) {
   toast.add({
      severity,
      summary,
      detail,
      life,
   });

   // log to sentry
   if (severity === "danger" && logInfo) {
      console.error(logInfo);
   }
}
