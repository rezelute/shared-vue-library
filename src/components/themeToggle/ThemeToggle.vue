<template>
   <Button
      id="themeToggle"
      :icon="themeIcon"
      variant="outlined"
      aria-label="Toggle theme"
      @click="toggleTheme()"
   />
</template>

<script setup lang="ts">
import Button from "primevue/button"
import { computed, ref } from "vue"

const lsTheme = localStorage.getItem("theme") || "light"
const theme = ref(lsTheme)
document.documentElement.classList.toggle("dark", lsTheme === "dark")

// computed
// -----------------------------------------
// const themeIcon = ref("pi pi-sun");
const themeIcon = computed(() => (theme.value === "light" ? "pi pi-sun" : "pi pi-moon"))

// methods
// -----------------------------------------
function toggleTheme() {
   const newTheme = theme.value === "light" ? "dark" : "light"
   localStorage.setItem("theme", newTheme) // Save theme preference to local storage
   theme.value = newTheme
   document.documentElement.classList.toggle("dark", newTheme === "dark")
}
</script>

<style scoped></style>
