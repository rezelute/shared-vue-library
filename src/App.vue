<template>
   <div>
      <!-- Loader at the top of the page, visible when isLoading is true -->
      <div v-if="isLoading" class="bar">
         <div></div>
      </div>

      <div class="bg-surface-50 dark:bg-surface-800 min-h-screen flex flex-col">
         <SiteNavigation :items="navItems" v-if="serverConnectionReady">
            <template #logo>my logo</template>
         </SiteNavigation>
         <!-- This is a one off server health check that happens when the app loads to ensure the Server is running -->
         <!-- Otherwise the app would load and clicking any buttons would all trigger server errors -->
         <main class="flex flex-grow" :class="{ 'items-center justify-center': !serverConnectionReady }">
            <div v-if="isLoading" class="loader text-primary"></div>
            <AppErrorInfo v-else-if="!serverConnectionReady" error="Server is down" class="max-w-xl mx-auto">
               The server is unreachable. We have been notified about this. Please try accessing the site
               again later.
            </AppErrorInfo>
            <RouterView v-else />
         </main>
         <Toast />
      </div>
   </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import SiteNavigation from "@/components/siteNavigation/SiteNavigation.vue";
import { RouterView } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import AppErrorInfo from "@/components/appErrorInfo/AppErrorInfo.vue";

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

<style scoped>
.bar {
   position: absolute;
   top: 0%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 100%;
   height: 10px;
   background: #ffffff;
   overflow: hidden;
}
.bar div:before {
   content: "";
   position: absolute;
   top: 0px;
   left: 0px;
   bottom: 0px;
   background: #247e18;
   animation: box-1 3100ms cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;
}
.bar div:after {
   content: "";
   position: absolute;
   top: 0px;
   left: 0px;
   bottom: 0px;
   background: #35a626;
   animation: box-2 3100ms cubic-bezier(0.16, 0.84, 0.44, 1) infinite;
   animation-delay: 2150ms;
}
@keyframes box-1 {
   0% {
      left: -35%;
      right: 100%;
   }
   60%,
   100% {
      left: 100%;
      right: -90%;
   }
}
@keyframes box-2 {
   0% {
      left: -200%;
      right: 100%;
   }
   60%,
   100% {
      left: 107%;
      right: -8%;
   }
}

/* .loader {
   width: fit-content;
   font-weight: bold;
   font-family: monospace;
   white-space: pre;
   font-size: 25px;
   line-height: 1.2em;
   height: 1.2em;
   overflow: hidden;
}
.loader:before {
   content: "L o a d i n g...\Aᛚ o a d i n g...\Aᛚ ᛟ a d i n g...\A ᛚ ᛟ ᚨ d i n g...\A ᛚ ᛟ ᚨ ᛞ i n g...\A ᛚ ᛟ ᚨ ᛞ ᛁ n g...\A ᛚ ᛟ ᚨ ᛞ ᛁ ᚾ g...\A ᛚ ᛟ ᚨ ᛞ ᛁ ᚾ ᚷ...";
   white-space: pre;
   display: inline-block;
   animation: l39 1s infinite steps(8) alternate;
}

@keyframes l39 {
   100% {
      transform: translateY(-100%);
   }
} */
</style>
