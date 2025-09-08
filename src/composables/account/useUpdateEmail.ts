// composables/useUpdateEmail.ts
import accountService from "@/services/account/accountService";
import { type EmitNotify } from "@/types";
import normalizeError from "@/utils/error/normalizeError.util";

export function useUpdateEmail() {
   async function updateEmail(
      token: string,
      onSuccess: (payload: EmitNotify) => void,
      onError: (payload: EmitNotify) => void
   ) {
      const updateEmailErrorSummary = "Failed to update your email!";
      const updateEmailErrorGenericDetail =
         "Something went wrong while updating your email. Please try again or contact us to let us know about this issue.";
      const updateEmailErrorInvalidTokenDetail =
         "The email verification token is invalid or has expired. Please try again.";

      try {
         const data = await accountService.updateEmail(token);

         if (data.status === "OK") {
            onSuccess({
               type: "email_already_verified",
               severity: "success",
               summary: "updateEmailSuccessSummary",
               detail: "updateEmailSuccessDetail",
            });
         } else if (data.status === "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR") {
            onError({
               type: "email_verification_invalid_token",
               severity: "error",
               summary: updateEmailErrorSummary,
               detail: updateEmailErrorInvalidTokenDetail,
               json: data,
            });
         } else {
            throw new Error(
               `Unexpected response status: ${data.status}. Expected 'OK' or 'EMAIL_VERIFICATION_INVALID_TOKEN_ERROR'.`
            );
         }
      } catch (err) {
         onError({
            type: "unexpected",
            severity: "error",
            summary: updateEmailErrorSummary,
            detail: updateEmailErrorGenericDetail,
            json: normalizeError(err),
         });
      }
   }

   return {
      updateEmail,
   };
}
