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
                     We need a few basic details for essential purposes—like personalizing emails with your
                     name.
                  </p>

                  <FullNameInput
                     v-if="showNameInput"
                     v-model:firstName="userProfile.firstName"
                     v-model:lastName="userProfile.lastName"
                     :isLastNameRequired="isLastNameRequired"
                     :isSubmitClicked="isSubmitClicked"
                     @validity-changed="
                        (val: boolean) => {
                           isNameValid = val;
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
import Button from "primevue/button";
import Card from "primevue/card";
import { computed, onMounted, ref } from "vue";
import PageLoader from "../../../components/loading/pageLoader/PageLoader.vue";
import toastContent from "../../../content/generic/toastContent";
import profileService, {
   type ProfileConfigResp,
   type ProfileFields,
} from "../../../services/account/profileService";
import { type EmitNotify } from "../../../types";
import normalizeError from "../../../utils/error/normalizeError.util";
import FullNameInput from "./FullNameInput.vue";

const emits = defineEmits(["profileLoadError", "profileSubmitSuccess", "profileSubmitError"]);

// data
// -----------------------------------------
const profileConfig = ref<ProfileConfigResp[] | null>(null);
const isLoading = ref(false);
const isSubmitClicked = ref(false);
const isProfileSubmitting = ref(false);
// fields
const userProfile = ref<ProfileFields | null>(null);
const isNameValid = ref(false);

// lifecycle
// -----------------------------------------
onMounted(async () => {
   await loadProfile();
});

// computed
// -----------------------------------------
const showNameInput = computed(() => {
   return profileConfig.value?.find((config) => config.category === "name") !== undefined;
});

const isLastNameRequired = computed(() => {
   const nameConfig = profileConfig.value?.find((config) => config.category === "name");
   return nameConfig
      ? nameConfig.fields.find((field) => field.type === "lastName" && field.isRequired) !== undefined
      : false;
});

// methods
// -----------------------------------------
async function loadProfile() {
   try {
      isLoading.value = true;

      // fetch user profile data
      const { data: profileConfigData } = await profileService.getProfileConfig();
      const { data: profileData } = await profileService.getProfile();

      profileConfig.value = profileConfigData;
      userProfile.value = { ...profileData.fields }; // we dont care about isComplete
   } catch (err) {
      emits("profileLoadError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
   } finally {
      isLoading.value = false;
   }
}

async function onSubmitProfile() {
   isProfileSubmitting.value = true;

   try {
      if (!isNameValid.value) {
         isSubmitClicked.value = true;
         // if name is not valid, we don't submit the profile
         // fields will be showing error messages after the button is clicked
         return;
      }

      // submit profile data
      await profileService.updateProfile(userProfile.value as ProfileFields);

      emits("profileSubmitSuccess");
   } catch (err) {
      emits("profileSubmitError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
   } finally {
      isProfileSubmitting.value = false;
   }
}
</script>

<style scoped></style>
