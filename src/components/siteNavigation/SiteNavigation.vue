<template>
   <header class="bg-surface-0 dark:bg-surface-900">
      <div class="container">
         <Menubar :model="[]">
            <template #start>
               <Button asChild v-slot="slotProps" variant="link">
                  <RouterLink :to="!userSignedIn ? '/' : '/home'" :class="(slotProps as any).class">
                     <slot name="logo" />
                  </RouterLink>
               </Button>
            </template>

            <template #end>
               <div class="flex gap-5">
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
                        v-if="userSignedIn"
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
                        aria-controls="overlay_tmenu"
                     />
                     <TieredMenu ref="tieredMenu" id="overlay_tmenu" :model="mobileItems" popup>
                        <template #item="{ item, props }">
                           <router-link v-if="item.route" :to="item.route" v-bind="props.action">
                              <span :class="item.icon" />
                              <span class="ml-2">{{ item.label }}</span>
                           </router-link>

                           <!-- Fallback for commands (e.g., sign out) -->
                           <button
                              v-else
                              type="button"
                              v-bind="props.action"
                              @click="(e) => item.command?.({ originalEvent: e, item })"
                           >
                              <span :class="item.icon" />
                              <span>{{ item.label }}</span>
                           </button>
                        </template>
                     </TieredMenu>
                  </div>

                  <ThemeToggle class="ms-2" />
               </div>
            </template>
         </Menubar>
      </div>
   </header>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import TieredMenu from "primevue/tieredmenu";
import ThemeToggle from "../../components/themeToggle/ThemeToggle.vue";
import Session from "supertokens-web-js/recipe/session";
import { useUserStore } from "../../stores/userStore";
import toastContent from "../../content/generic/toastContent";

interface MenuItem {
   label: string;
   icon: string;
   to: string;
}

const emits = defineEmits(["signoutSuccess", "error"]);
const props = withDefaults(
   defineProps<{
      items: MenuItem[];
      userSignedIn: boolean;
   }>(),
   {
      userSignedIn: false,
   }
);

// data
// -----------------------------------------
const userStore = useUserStore();
const signOutloading = ref(false);
const tieredMenu = ref<InstanceType<typeof TieredMenu> | null>(null);

const signInUpItems = ref([
   { label: "Sign in", icon: "pi pi-sign-in", route: "/signin" },
   { label: "Sign up", icon: "pi pi-user-plus", route: "/signup" },
]);

// computed
// -----------------------------------------
const items = computed(() => {
   if (!props.userSignedIn) {
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
      ...(props.userSignedIn
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
   tieredMenu.value?.toggle(event);
};

async function onSignout() {
   try {
      signOutloading.value = true;
      await Session.signOut();
      userStore.updateAuth();

      // redirect to signin page
      window.location.assign("signin");
   } catch (error) {
      emits("error", {
         type: "unexpected",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         error,
      });
   } finally {
      signOutloading.value = false;
   }
}
</script>
