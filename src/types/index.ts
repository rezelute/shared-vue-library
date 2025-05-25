import type { AddToast } from "../composables/toast";

// You export types explicitly
export type EmitNotify = Omit<AddToast, "life">;

export interface EmitSuccess {
   summary: string;
   detail: string;
}
