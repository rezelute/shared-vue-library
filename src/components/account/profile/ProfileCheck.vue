<template>
   <!-- Check profile completion -->
   <PageLoader :isLoading="isLoading" loadingText="Redirecting, do not close the window." />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import PageLoader from "./../../loading/pageLoader/PageLoader.vue";
import profileService from "../../../services/account/profileService";
import { useRouter, useRoute } from "vue-router";
import { getRedirectTargetWithQueryParams } from "../../../utils/url";

const route = useRoute();
const router = useRouter();

const emits = defineEmits(["profileCheckError", "profileIsComplete", "profileNotComplete"]);

// data
// -----------------------------------------
const isLoading = ref(true); // this is always true because it will redirect after the checks

// lifecycle
// -----------------------------------------
onMounted(async () => {
   checkProfileCompletion();
});

// methods
// -----------------------------------------
async function checkProfileCompletion() {
   try {
      const { data } = await profileService.getProfile();

      // profile is complete, go to home page OR to redirect query param if exists (e.g. /home?redirect=/some-page)
      if (data.isComplete) {
         const redirect = getRedirectTargetWithQueryParams(route.query);
         if (redirect) {
            router.push(redirect);
         } else {
            router.push({ name: "home" });
         }
      }
      // Profile NOT complete, redirect to the profile completion page (preserve query params)
      else {
         // if there is a redirect query param, we redirect to the profile page with that query param
         if (route.query.redirect) {
            router.push({
               name: "profile",
               query: route.query,
            });
         }
         // no "redirect" query param, we redirect to the profile page and add redirect query param to the homepage
         else {
            router.push({
               name: "profile",
               query: {
                  ...route.query,
                  redirect: "home",
               },
            });
         }
      }
   } catch (err) {
      console.error("Error checking profile completion: ", err);
      // application decides how to handle the error
      emits("profileCheckError");
   }
}
</script>

<style scoped></style>
