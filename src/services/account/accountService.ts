import { type ApiResponse,type SuccessResponse } from "../../types";
import { ApiResponseError } from "../../utils/error/ApiResponseError";

interface UserEmailData {
   email: string;
}

interface UpdateUserEmailData {
   status: "OK" | "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR";
}

async function getEmail(): Promise<ApiResponse<UserEmailData>> {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/user/email`, {
      method: "GET",
      credentials: "include",
      headers: {
         "Content-Type": "application/json",
      },
   });

   const data = await response.json();
   if (!response.ok) {
      throw new ApiResponseError("Failed to get email", response, data);
   }

   return data as ApiResponse<UserEmailData>;
}

async function requestEmailChange(userNewEmail: string): Promise<SuccessResponse> {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/user/email/request-change`, {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email: userNewEmail }),
   });

   const data = await response.json();
   if (!response.ok) {
      throw new ApiResponseError("Failed to request email change", response, data);
   }

   return data as SuccessResponse;
}

async function updateEmail(token: string): Promise<UpdateUserEmailData> {
   // note this is a supertokens based endpoint (/auth/user/email/verify)
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/auth/user/email/verify`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ token }),
   });

   const data = await response.json();
   if (!response.ok) {
      throw new ApiResponseError("Failed to update email", response, data);
   }

   // note that supertokens returns a different structure for this endpoint (not wrapped in data)
   return data as UpdateUserEmailData;
}

async function requestDelete(): Promise<SuccessResponse> {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/account/request-delete`, {
      method: "POST",
      credentials: "include",
   });

   const data = await response.json();
   if (!response.ok) {
      throw new ApiResponseError("Failed to request account deletion", response, data);
   }

   return data as SuccessResponse;
}

async function deleteAccount(deleteToken: string): Promise<SuccessResponse> {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/account`, {
      method: "DELETE",
      credentials: "include",
      headers: {
         "X-Delete-Token": deleteToken,
         "Content-Type": "application/json",
      },
   });

   const data = await response.json();
   if (!response.ok) {
      throw new ApiResponseError("Failed to delete account", response, data);
   }

   return data as SuccessResponse;
}

export default { getEmail, updateEmail, requestEmailChange, requestDelete, deleteAccount };
