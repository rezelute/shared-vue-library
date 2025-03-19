<template>
   <div>
      <h1>Goodbye</h1>
      <p>Your account has been deleted, thank you for visiting!</p>
      <p>You will be redirected to the landing page in {{ redirectTimeMs }} seconds automatically.</p>
   </div>
</template>

<script setup lang="ts">
const router = useRouter();
const redirectTimeMs = 5000;

// lifecycle
// -----------------------------------------
onMounted(() => {
   setTimeout(() => {
      router.push("/");
   }, redirectTimeMs);
});
</script>

<style scoped></style>
