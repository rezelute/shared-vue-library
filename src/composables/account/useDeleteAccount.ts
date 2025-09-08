// composables/useDeleteAccount.ts
import Session from "supertokens-web-js/recipe/session";
import accountService from "@/services/account/accountService";
import { type EmitNotify } from "@/types";
import normalizeError from "@/utils/error/normalizeError.util";

export function useDeleteAccount() {
   async function deleteAccount(
      token: string,
      onSuccess: () => void,
      onError: (payload: EmitNotify) => void
   ) {
      const deleteAccountErrorSummary = "We failed to delete your account!";
      const deleteAccountErrorDetail =
         "Something went wrong while deleting your account. Please try again or contact us to let us know about this issue.";

      try {
         await accountService.deleteAccount(token);
         await Session.signOut();
         onSuccess();
      } catch (err) {
         onError({
            type: "unexpected",
            severity: "error",
            summary: deleteAccountErrorSummary,
            detail: deleteAccountErrorDetail,
            json: normalizeError(err),
         });
      }
   }

   return {
      deleteAccount,
   };
}
