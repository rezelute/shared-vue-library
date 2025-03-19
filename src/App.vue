<template>
   <!-- ANYTHING WRITTEN IN THIS FILE IS NOT SHARED BETWEEN PROJECTS (includes styles) -->
   <div>
      <div class="tester bg-surface-50 dark:bg-surface-800 min-h-screen">
         <!-- Navigation -->
         <SiteNavigation :items="navItems">
            <template #logo> my logo </template>
         </SiteNavigation>

         <main>
            <RouterView />
         </main>

         <!-- <SiteFooter /> -->
      </div>
   </div>
</template>

<script setup lang="ts">
// import Session from "supertokens-web-js/recipe/session";
import SiteNavigation from "@/components/siteNavigation/SiteNavigation.vue";
import { RouterView } from "vue-router";
import { useUserStore } from "@/stores/userStore";

// data
// -----------------------------------------
const userStore = useUserStore();
const signedInItems = [
   { label: "Contact", icon: "pi pi-envelope", to: "/contact" },
   { label: "Account", icon: "pi pi-cog", to: "/account" },
];
const signedOutItems = [{ label: "Contact", icon: "pi pi-envelope", to: "/contact" }];

// lifecycle
// -----------------------------------------
onMounted(() => {
   userStore.updateAuth();
});

// computed
// -----------------------------------------
const navItems = computed(() => (userStore.isSignedIn ? signedInItems : signedOutItems));
</script>

<style scoped>
.tester {
   background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e3b533' fill-opacity='0.09' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
