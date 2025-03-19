<template>
   <div class="not-found-page">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <router-link to="/">Go back to Home</router-link>
   </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.not-found-page {
   margin-top: 50px;
   text-align: center;
}

.not-found-page h1 {
   margin-bottom: 20px;
   font-size: 2em;
}

.not-found-page p {
   margin-bottom: 20px;
}

.not-found-page a {
   color: #42b983;
   text-decoration: none;
}
</style>
