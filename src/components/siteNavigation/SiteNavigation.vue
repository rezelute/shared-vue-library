<template>
   <header class="bg-surface-0 dark:bg-surface-900">
      <div class="container">
         <Menubar :model="[]">
            <template #start>
               <Button asChild v-slot="slotProps" variant="link">
                  <RouterLink :to="!userStore.isSignedIn ? '/' : '/home'" :class="(slotProps as any).class">
                     <slot name="logo" />
                  </RouterLink>
               </Button>
            </template>

            <template #end>
               <div class="flex items-center gap-5">
                  <!-- Links for larger screens -->
                  <div class="hidden lg:flex items-center gap-5">
                     <div v-for="item in items" :key="item.label">
                        <Button asChild v-slot="slotProps" variant="outlined">
                           <RouterLink :to="item.to" :class="(slotProps as any).class">
                              <i :class="item.icon"></i>
                              <span>{{ item.label }}</span>
                           </RouterLink>
                        </Button>
                     </div>

                     <Button
                        v-if="userStore.isSignedIn"
                        @click="onSignout"
                        icon="pi pi-sign-out"
                        aria-label="Sign out"
                        variant="outlined"
                        :loading="signOutloading"
                     />
                  </div>

                  <!-- Burger menu for smaller screens -->
                  <div class="lg:hidden">
                     <Button
                        icon="pi pi-bars"
                        @click="toggleMenu"
                        aria-label="Navigation menu"
                        aria-haspopup="true"
                        aria-controls="overlay_menu"
                     />
                     <Menu ref="menu" id="overlay_menu" :model="mobileItems" popup />
                  </div>

                  <ThemeToggle class="ms-2" />
               </div>
            </template>
         </Menubar>
      </div>
   </header>
</template>

<script setup lang="ts">
import Menu from "primevue/menu";
import Button from "primevue/button";
import ThemeToggle from "@/components/themeToggle/ThemeToggle.vue";
import Menubar from "primevue/menubar";
import Session from "supertokens-web-js/recipe/session";
import { useUserStore } from "@/stores/userStore";
import useToast from "@/utils/toast";

interface MenuItem {
   label: string;
   icon: string;
   to: string;
}

const { addToast, toastContent } = useToast();
const props = defineProps<{ items: MenuItem[] }>();

// data
// -----------------------------------------
const userStore = useUserStore();
const signOutloading = ref(false);
const menu = ref<InstanceType<typeof Menu> | null>(null);

const signInUpItems = ref([
   { label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
   { label: "Sign up", icon: "pi pi-user-plus", to: "/signup" },
]);

// computed
// -----------------------------------------
const items = computed(() => {
   if (!userStore.isSignedIn) {
      return [...(props.items || []), ...signInUpItems.value];
   }
   // logged in (we dont show sign in/up items)
   else {
      return props.items;
   }
});

const mobileItems = computed(() => {
   return [
      ...items.value,
      ...(userStore.isSignedIn
         ? [
              {
                 label: "Sign out",
                 icon: "pi pi-sign-out",
                 command: () => onSignout(),
              },
           ]
         : []), // If not logged in, this returns an empty array (no item added)
   ];
});

// methods
// -----------------------------------------
const toggleMenu = (event: Event) => {
   menu.value?.toggle(event);
};

async function onSignout() {
   try {
      signOutloading.value = true;
      await Session.signOut();
      userStore.updateAuth();

      // redirect to signin page
      window.location.assign("signin");
   } catch (error) {
      addToast({
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error,
      });
   } finally {
      signOutloading.value = false;
   }
}
</script>
