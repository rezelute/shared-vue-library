import { type AddToast } from "../composables/toast";

export {};

declare global {
   type EmitNotify = Omit<AddToast, "life">;

   // interface EmitNotify extends  {
   //    severity: "info" | "warn" | "error";
   //    // type: "unexpected" | unknown;
   //    summary: string;
   //    detail: string;
   //    json: object;
   // }

   interface EmitSuccess {
      summary: string;
      detail: string;
   }
}
