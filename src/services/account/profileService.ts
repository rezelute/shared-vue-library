import { type ApiResponse } from "../../types";
import { ApiResponseError } from "../../utils/error/ApiResponseError";

export type ProfileFieldCategory = "name" | "address";

export type ProfileFieldKey = "firstName" | "lastName";

export type ProfileFields = Record<ProfileFieldKey, string>;

export interface ProfileResp {
   fields: ProfileFields;
   isCompleted: boolean;
}

export interface ProfileConfigResp {
   category: ProfileFieldCategory;
   fields: Array<{
      type: ProfileFieldKey;
      isRequired: boolean;
   }>;
}

type ProfileUpdatedResp = ProfileFields;

// ex: [{ category: "name", fields: [{ type: "firstName", required: true }, { type: "lastName", required: true }] }]
async function getProfileConfig(): Promise<ApiResponse<ProfileConfigResp[]>> {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/profile/config`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   });

   const data = await response.json();
   if (!response.ok) {
      throw new ApiResponseError("Failed to get profile configuration", response, data);
   }

   return data as ApiResponse<ProfileConfigResp[]>;
}

// ex: { fields: { firstName: "John", lastName: "Doe" }, isComplete: true }
async function getProfile(): Promise<ApiResponse<ProfileResp>> {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/user/profile`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   });

   const data = await response.json();
   if (!response.ok) {
      throw new ApiResponseError("Failed to get profile", response, data);
   }

   return data as ApiResponse<ProfileResp>;
}

// ex : { firstName: "John", lastName: "Doe" }
async function updateProfile(newFields: ProfileFields): Promise<ApiResponse<ProfileUpdatedResp>> {
   const response = await fetch(`${import.meta.env.VITE_API_DOMAIN}/user/profile`, {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ ...newFields }),
   });

   const data = await response.json();
   if (!response.ok) {
      throw new ApiResponseError("Failed to update profile", response, data);
   }

   return data as ApiResponse<ProfileUpdatedResp>;
}

export default { getProfile, updateProfile, getProfileConfig };
