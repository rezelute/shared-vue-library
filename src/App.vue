<template>
   <div>
      <!-- Loader at the top of the page, visible when isLoading is true -->
      <PageInfiniteLoader :isLoading="isLoading" />

      <div class="bg-surface-50 dark:bg-surface-800 min-h-screen flex flex-col">
         <Toast />

         <SiteNavigation :items="navItems" v-if="serverConnectionReady">
            <template #logo>my logo</template>
         </SiteNavigation>

         <!-- This is a one off server health check that happens when the app loads to ensure the Server is running -->
         <!-- Otherwise the app would load and clicking any buttons would all trigger server errors -->
         <main
            class="flex flex-col flex-grow"
            :class="{ 'items-center justify-center': !serverConnectionReady }"
         >
            <div v-if="isLoading" class="loader text-primary"></div>
            <AppErrorInfo v-else-if="!serverConnectionReady" error="Server is down" class="max-w-xl mx-auto">
               The server is unreachable. We have been notified about this. Please try accessing the site
               again later.
            </AppErrorInfo>
            <RouterView v-else />
         </main>
      </div>
   </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import SiteNavigation from "@/components/siteNavigation/SiteNavigation.vue";
import { RouterView } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import AppErrorInfo from "@/components/appErrorInfo/AppErrorInfo.vue";
import PageInfiniteLoader from "./components/pageInfiniteLoader/PageInfiniteLoader.vue";

// data
// -----------------------------------------
const isLoading = ref(true);
const serverConnectionReady = ref(false);
const userStore = useUserStore();
const navSignedInItems = [
   { label: "Contact", icon: "pi pi-envelope", to: "/contact" },
   { label: "Account", icon: "pi pi-cog", to: "/account" },
];
const navSignedOutItems = [{ label: "Contact", icon: "pi pi-envelope", to: "/contact" }];

// lifecycle
// -----------------------------------------
onMounted(async () => {
   await checkServer();
});

// computed
// -----------------------------------------
const navItems = computed(() => (userStore.isSignedIn ? navSignedInItems : navSignedOutItems));

// methods
// -----------------------------------------
async function checkServer() {
   // isLoading.value = true;
   try {
      isLoading.value = true;

      const response = await fetch(import.meta.env.VITE_API_DOMAIN, { method: "HEAD" });
      if (!response.ok) throw new Error("Server is down");

      serverConnectionReady.value = true;
   } catch (error) {
      console.error(error);
      serverConnectionReady.value = false;
   } finally {
      isLoading.value = false;
   }
}
</script>

<style scoped></style>
