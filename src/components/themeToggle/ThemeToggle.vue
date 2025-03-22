<template>
   <button>{{ userStore.isSignedIn }}</button>
   <!-- <Button
      :icon="themeIcon"
      id="themeToggle"
      @click="userStore.toggleTheme()"
      variant="outlined"
      aria-label="Toggle theme"
   /> -->
</template>

<script setup lang="ts">
// import Button from "primevue/button";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

// computed
// -----------------------------------------
const themeIcon = computed(() => (userStore.theme === "light" ? "pi pi-sun" : "pi pi-moon"));
</script>

<style scoped></style>
