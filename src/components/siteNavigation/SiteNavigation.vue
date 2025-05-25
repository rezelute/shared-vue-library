<template>
   <header class="bg-surface-0 dark:bg-surface-900">
      <div class="container">
         <Menubar :model="[]">
            <template #start>
               <Button v-slot="slotProps" asChild variant="link">
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
                        <Button v-slot="slotProps" asChild variant="outlined">
                           <RouterLink :to="item.to" :class="(slotProps as any).class">
                              <i :class="item.icon"></i>
                              <span>{{ item.label }}</span>
                           </RouterLink>
                        </Button>
                     </div>

                     <Button
                        v-if="userSignedIn"
                        icon="pi pi-sign-out"
                        aria-label="Sign out"
                        variant="outlined"
                        :loading="signOutloading"
                        @click="onSignout"
                     />
                  </div>

                  <!-- Burger menu for smaller screens -->
                  <div class="lg:hidden">
                     <!-- Menu trigger button -->
                     <Button
                        icon="pi pi-bars"
                        aria-label="Navigation menu"
                        aria-haspopup="true"
                        aria-controls="overlay_tmenu"
                        @click="toggleMenu"
                     />
                     <!-- Smaller screen menu -->
                     <TieredMenu id="overlay_tmenu" ref="tieredMenu" :model="mobileItems" popup>
                        <template #item="{ item, props }">
                           <!-- LINKS -->
                           <router-link v-if="item.to" :to="item.to" v-bind="props.action">
                              <span :class="item.icon" />
                              <span class="ml-2">{{ item.label }}</span>
                           </router-link>

                           <!-- BUTTONS (sign out etc.) -->
                           <Button
                              v-if="userSignedIn"
                              icon="pi pi-sign-out"
                              aria-label="Sign out"
                              variant="outlined"
                              :loading="signOutloading"
                              @click="onSignout"
                           />
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
import { type EmitNotify } from "../../types";

interface MenuItem {
   label: string;
   icon: string;
   to: string;
}

const emits = defineEmits(["signoutSuccess", "notify"]);
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

const signUpSystemItems = ref([
   { label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
   { label: "Sign up", icon: "pi pi-user-plus", to: "/signup" },
]);

// computed
// -----------------------------------------
const items = computed(() => {
   // signed OUT links
   if (!props.userSignedIn) {
      return [...(props.items || []), ...signUpSystemItems.value] as MenuItem[];
   }
   // signed IN links (we dont show sign in/up items)
   else {
      return props.items;
   }
});

const mobileItems = computed(() => {
   return [...items.value];

   // return [
   //    ...items.value,
   //    ...(props.userSignedIn
   //       ? [
   //            {
   //               label: "Sign out",
   //               icon: "pi pi-sign-out",
   //               command: () => onSignout(),
   //            },
   //         ]
   //       : []), // If not logged in, this returns an empty array (no item added)
   // ];
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
      emits("notify", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: error,
      } satisfies EmitNotify);
   } finally {
      signOutloading.value = false;
   }
}
</script>
