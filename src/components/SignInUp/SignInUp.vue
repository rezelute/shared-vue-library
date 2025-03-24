<template>
   <PageLoader :isLoading="false">
      <SignInUpForm
         v-if="!showMagicInputCode"
         :pageAuthType="pageAuthType"
         @inputCodeEmailed="showMagicInputCode = true"
      />
      <VerifyCode v-else :pageAuthType="pageAuthType" />

      <Toast />
   </PageLoader>
</template>

<script setup lang="ts">
import { getLoginAttemptInfo } from "supertokens-web-js/recipe/passwordless";
import { useRouter } from "vue-router";
import { signInAndUp } from "supertokens-web-js/recipe/thirdparty";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import addToast from "@/utils/toast";
import toastContent from "@/content/generic/toastContent";
import PageLoader from "@/components/pageLoader/PageLoader.vue";

const toast = useToast();
const route = useRoute();
const router = useRouter();

// data
// -----------------------------------------
const isLoading = ref(true);
const showMagicInputCode = ref(false); // if a magic link has been sent, show the code input field

// lifecycle
// -----------------------------------------
onMounted(async () => {
   showMagicInputCode.value = await hasInitialMagicLinkBeenSent();

   // if the url contains query param ?thirdPartyId=google, we handle the google callback
   if (router.currentRoute.value.query.thirdPartyId === "google") {
      await handleGoogleCallback();
   }
});

// computed
// -----------------------------------------
const pageAuthType = computed(() => {
   if (route.name === "signup") return "Sign up";
   if (route.name === "signin") return "Sign in";
   return ""; // Default value if neither matches
});

// methods
// -----------------------------------------
/** If the user refreshes the page on the consume code, we need to know if we are showing the code input field */
async function hasInitialMagicLinkBeenSent() {
   isLoading.value = true;

   try {
      const codeAlreadySent = await getLoginAttemptInfo();
      if (codeAlreadySent) console.info("Code already sent: ", codeAlreadySent);
      return codeAlreadySent !== undefined;
   } catch (error) {
   } finally {
      isLoading.value = false;
   }
}

/** Once the third party provider redirects your user back to your app, you need to consume the information to sign in the user. */
async function handleGoogleCallback() {
   const googleFailSummary = "Failed to sign in with Google";
   const googleFailDetail = "Please try again later or try another form of login.";

   try {
      const response = await signInAndUp();

      if (response.status === "OK") {
         console.log("handleGoogleCallback> ", response.user);
         // sign UP successful
         if (response.createdNewRecipeUser && response.user.loginMethods.length === 1) {
            console.log("New user signed up successfully");
         }
         // sign IN successful
         else {
            console.log("Existing user signed in successfully");
         }

         window.location.assign("/home");
      } else if (response.status === "SIGN_IN_UP_NOT_ALLOWED") {
         addToast({
            toast,
            severity: "danger",
            summary: googleFailSummary,
            detail: googleFailDetail,
            logInfo: { summary: "Google auth callback", error: response.reason },
         });
      }
      // SuperTokens requires that the third party provider
      // gives an email for the user. If that's not the case, sign up / in
      // will fail.
      else {
         addToast({
            toast,
            severity: "danger",
            summary: googleFailSummary,
            detail: googleFailDetail,
            logInfo: { summary: "Google auth callback", error: response },
         });
         window.location.assign("/signin"); // redirect back to login page
      }
   } catch (err: any) {
      // if (err.isSuperTokensGeneralError === true) {} else {}

      addToast({
         toast,
         severity: "danger",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         logInfo: { summary: "Google auth callback", error: err.message },
      });
   }
}
</script>

<style scoped></style>
