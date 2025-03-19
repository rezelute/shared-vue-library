<template>
   <div class="loader"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loader {
   position: relative;
   width: 48px;
   height: 48px;
   border-radius: 50%;
   animation: rotate 1s linear infinite;
}

.loader::before,
.loader::after {
   position: absolute;
   inset: 0;
   box-sizing: border-box;
   content: "";
   border: 5px solid var(--color-brand);
   border-radius: 50%;
   animation: prixClipFix 2s linear infinite;
}

.loader::after {
   inset: 6px;
   border-color: var(--color-brand-dark);
   animation:
      prixClipFix 2s linear infinite,
      rotate 0.5s linear infinite reverse;
}

@keyframes rotate {
   0% {
      transform: rotate(0deg);
   }

   100% {
      transform: rotate(360deg);
   }
}

@keyframes prixClipFix {
   0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
   }

   25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
   }

   50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
   }

   75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
   }

   100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
   }
}
</style>
