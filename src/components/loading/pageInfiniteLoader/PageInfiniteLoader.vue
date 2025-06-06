<template>
   <div v-if="isLoading" class="bar">
      <div></div>
   </div>
</template>

<script setup lang="ts">
defineProps<{
   isLoading: boolean;
}>();
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
