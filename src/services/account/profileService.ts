import { type ApiResponse } from "../../types"
import { ApiResponseError } from "../../utils/error/ApiResponseError"

export type ProfileFieldCategory = "name" | "address"
export interface ProfileConfigResp {
   category: ProfileFieldCategory
   fields: Array<{
      type: "first_name" | "last_name"
      isRequired: boolean
   }>
}

// ex: { firstName: "John", lastName: "Doe" }
export type ProfileFields = Record<"firstName" | "lastName", string>
// ex: { fields: { firstName: "John", lastName: "Doe" }, isComplete: true }
export interface ProfileResp {
   fields: ProfileFields
   isCompleted: boolean
}

type ProfileUpdatedResp = ProfileFields

// ex: [{ category: "name", fields: [{ type: "firstName", required: true }, { type: "lastName", required: true }] }]
async function getProfileConfig(apiDomain: string): Promise<ApiResponse<ProfileConfigResp[]>> {
   const response = await fetch(`${apiDomain}/profile/config`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   })

   const data = await response.json()
   if (!response.ok) {
      throw new ApiResponseError("Failed to get profile configuration", response, data)
   }

   return data as ApiResponse<ProfileConfigResp[]>
}

// ex: { fields: { firstName: "John", lastName: "Doe" }, isComplete: true }
async function getProfile(apiDomain: string): Promise<ApiResponse<ProfileResp>> {
   const response = await fetch(`${apiDomain}/user/profile`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
   })

   const data = await response.json()
   if (!response.ok) {
      throw new ApiResponseError("Failed to get profile", response, data)
   }

   return data as ApiResponse<ProfileResp>
}

// ex : { firstName: "John", lastName: "Doe" }
async function updateProfile(
   newFields: ProfileFields,
   apiDomain: string
): Promise<ApiResponse<ProfileUpdatedResp>> {
   const response = await fetch(`${apiDomain}/user/profile`, {
      method: "PATCH",
      headers: {
         "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ ...newFields }),
   })

   const data = await response.json()
   if (!response.ok) {
      throw new ApiResponseError("Failed to update profile", response, data)
   }

   return data as ApiResponse<ProfileUpdatedResp>
}

export default { getProfile, updateProfile, getProfileConfig }
