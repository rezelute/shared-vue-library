<template>
   <div class="bg-surface-50 dark:bg-surface-800 min-h-screen flex flex-col">
      <!-- Loader at the top of the page, visible when isLoading is true -->
      <PageInfiniteLoader :isLoading="isLoading" />

      <Toast />

      <SiteNavigation v-if="!isLoading" :items="navItems" :userSignedIn="userStore.isSignedIn">
         <template #logo>my logo</template>
      </SiteNavigation>

      <!-- This is a one off server health check that happens when the app loads to ensure the Server is running -->
      <!-- Otherwise the app would load and clicking any buttons would all trigger server errors -->
      <main v-if="!isLoading" class="flex flex-col flex-grow">
         <RouterView />
      </main>
   </div>
</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import { computed,onMounted, ref } from "vue";
import { RouterView } from "vue-router";
import PageInfiniteLoader from "./components/loading/pageInfiniteLoader/PageInfiniteLoader.vue";
import SiteNavigation from "./components/siteNavigation/SiteNavigation.vue";
import { useUserStore } from "./stores/userStore";

// data
// -----------------------------------------
const isLoading = ref(true);
const userStore = useUserStore();
const navSignedInItems = [
   { label: "Contact", icon: "pi pi-envelope", to: "/contact" },
   { label: "Account", icon: "pi pi-cog", to: "/account" },
];
const navSignedOutItems = [{ label: "Contact", icon: "pi pi-envelope", to: "/contact" }];

// lifecycle
// -----------------------------------------
onMounted(() => {
   // Simulate a server health check
   setTimeout(() => {
      isLoading.value = false;
   }, 3000); // Simulate a 1 second delay for the server check
});

// computed
// -----------------------------------------
const navItems = computed(() => (userStore.isSignedIn ? navSignedInItems : navSignedOutItems));
</script>

<style scoped></style>
