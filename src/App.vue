<template>
   <!-- ANYTHING WRITTEN IN THIS FILE IS NOT SHARED BETWEEN PROJECTS (includes styles) -->
   <div>
      <div class="bg-surface-50 dark:bg-surface-800 min-h-screen">
         <SiteNavigation :items="navItems">
            <template #logo>my logo</template>
         </SiteNavigation>

         <main>
            <RouterView />
         </main>
      </div>
   </div>
</template>

<script setup lang="ts">
import SiteNavigation from "@/components/siteNavigation/SiteNavigation.vue";
import { RouterView } from "vue-router";
import { useUserStore } from "@/stores/userStore";

// data
// -----------------------------------------
const userStore = useUserStore();
const navSignedInItems = [
   { label: "Contact", icon: "pi pi-envelope", to: "/contact" },
   { label: "Account", icon: "pi pi-cog", to: "/account" },
];
const navSignedOutItems = [{ label: "Contact", icon: "pi pi-envelope", to: "/contact" }];

// lifecycle
// -----------------------------------------
// onMounted(() => {
//    userStore.updateAuth();
// });

// computed
// -----------------------------------------
const navItems = computed(() => (userStore.isSignedIn ? navSignedInItems : navSignedOutItems));
</script>

<style scoped></style>
