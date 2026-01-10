<template>
   <PageLoader :isLoading="isLoading">
      <Card v-if="profileConfig && userProfile" class="max-w-xl card-p-lg w-full">
         <template #title>
            <h1 class="h1">Profile</h1>
         </template>
         <template #content>
            <section>
               <form class="vstack-form" @submit.prevent>
                  <p>
                     We need a few basic details for essential purposes—like personalising emails
                     with your name.
                  </p>

                  <!-- First name -->
                  <NameInput
                     v-if="firstNameConfig.isActive"
                     v-model:name="userProfile.firstName"
                     nameType="first"
                     :isSubmitClicked="isSubmitClicked"
                     @validity-changed="
                        (val: boolean) => {
                           isFirstNameValid = val
                        }
                     "
                  />

                  <!-- Last name -->
                  <NameInput
                     v-if="lastNameConfig.isActive"
                     v-model:name="userProfile.lastName"
                     nameType="last"
                     :isSubmitClicked="isSubmitClicked"
                     @validity-changed="
                        (val: boolean) => {
                           isLastNameValid = val
                        }
                     "
                  />

                  <Button
                     label="Save profile"
                     submit="submit"
                     :loading="isProfileSubmitting"
                     @click="onSubmitProfile"
                  />
               </form>
            </section>
         </template>
      </Card>
   </PageLoader>
</template>

<script setup lang="ts">
import Button from "primevue/button"
import Card from "primevue/card"
import { computed, inject, onMounted, ref } from "vue"
import PageLoader from "../../../components/loading/pageLoader/PageLoader.vue"
import messages from "../../../content/messages"
import profileService, {
   type ProfileConfigResp,
   type ProfileFields,
} from "../../../services/account/profileService"
import { type EmitNotify } from "../../../types"
import normalizeError from "../../../utils/error/normalizeError.util"
import { API_DOMAIN_KEY } from "../../../utils/injectionKeys"
import NameInput from "./NameInput.vue"

const emits = defineEmits(["profileLoadError", "profileSubmitSuccess", "profileSubmitError"])
const apiDomain = inject(API_DOMAIN_KEY) as string

// data
// -----------------------------------------
const profileConfig = ref<ProfileConfigResp[] | null>(null)
const isLoading = ref(false)
const isSubmitClicked = ref(false)
const isProfileSubmitting = ref(false)
// fields
const userProfile = ref<ProfileFields | null>(null)
const isFirstNameValid = ref(false)
const isLastNameValid = ref(false)

// lifecycle
// -----------------------------------------
onMounted(async () => {
   await loadProfile()
})

// computed
// -----------------------------------------
const firstNameConfig = computed(() => {
   const result = { isActive: false, isRequired: false }

   const category = profileConfig.value?.find((config) => config.category === "name")
   if (!category) return result

   const field = category.fields.find((field) => field.type === "first_name")
   if (!field) return result

   result.isActive = true
   result.isRequired = field.isRequired

   return result
})

const lastNameConfig = computed(() => {
   const result = { isActive: false, isRequired: false }

   const category = profileConfig.value?.find((config) => config.category === "name")
   if (!category) return result

   const field = category.fields.find((field) => field.type === "last_name")
   if (!field) return result

   result.isActive = true
   result.isRequired = field.isRequired

   return result
})

// methods
// -----------------------------------------
async function loadProfile() {
   try {
      isLoading.value = true

      // fetch user profile data
      const { data: profileConfigData } = await profileService.getProfileConfig(apiDomain)
      const { data: profileData } = await profileService.getProfile(apiDomain)

      profileConfig.value = { ...profileConfigData }
      userProfile.value = { ...profileData.fields } // we dont care about isComplete
   } catch (err) {
      emits("profileLoadError", {
         type: "unexpected",
         severity: "error",
         summary: messages.error.somethingWentWrong.summary,
         detail: messages.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify)
   } finally {
      isLoading.value = false
   }
}

async function isProfileInputValid() {
   // if first name input is active, check its validity
   if (firstNameConfig.value.isActive && !isFirstNameValid.value) {
      return false
   }
   // if last name input is active, check its validity
   if (lastNameConfig.value.isActive && !isLastNameValid.value) {
      return false
   }

   // assume everything is valid
   return true
}

async function onSubmitProfile() {
   isProfileSubmitting.value = true
   isSubmitClicked.value = true

   try {
      if (!isProfileInputValid()) {
         // if name is not valid, we don't submit the profile
         // fields will be showing error messages after the button is clicked
         return
      }

      // submit profile data
      await profileService.updateProfile(userProfile.value as ProfileFields, apiDomain)

      emits("profileSubmitSuccess")
   } catch (err) {
      emits("profileSubmitError", {
         type: "unexpected",
         severity: "error",
         summary: messages.error.somethingWentWrong.summary,
         detail: messages.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify)
   } finally {
      isProfileSubmitting.value = false
   }
}
</script>

<style scoped></style>
