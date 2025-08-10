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
                  <!-- Menu trigger button -->
                  <Button
                     icon="pi pi-bars"
                     aria-label="Navigation menu"
                     aria-haspopup="true"
                     aria-controls="overlay_tmenu"
                     @click="toggleMenu"
                  />
                  <!-- Smaller screen menu -->
                  <TieredMenu id="overlay_tmenu" ref="tieredMenu" :model="renderedMenuItems" popup>
                     <template #item="{ item, props }">
                        <!-- LINKS -->
                        <router-link v-if="item.type === 'link'" :to="item.to" v-bind="props.action">
                           <span :class="item.icon" />
                           <span class="ml-2">{{ item.label }}</span>
                        </router-link>

                        <!-- BUTTONS (sign out etc.) -->
                        <button
                           v-else-if="item.type === 'button'"
                           :aria-label="item['aria-label']"
                           class="p-tieredmenu-item-link"
                           @click="(e) => item.command?.({ originalEvent: e, item })"
                        >
                           <span :class="item.icon" />
                           <span class="ml-2">{{ item.label }}</span>
                        </button>
                     </template>
                  </TieredMenu>

                  <ThemeToggle class="ms-2" />
               </div>
            </template>
         </Menubar>
      </div>
   </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import Button from "primevue/button";
import Menubar from "primevue/menubar";
import TieredMenu from "primevue/tieredmenu";
import ThemeToggle from "../../components/themeToggle/ThemeToggle.vue";
import Session from "supertokens-web-js/recipe/session";
import { useUserStore } from "../../stores/userStore";
import toastContent from "../../content/generic/toastContent";
import { type EmitNotify } from "../../types";
import normalizeError from "../../utils/error/normalizeError.util";

defineOptions({ name: "SiteNavigation" });

interface InputMenuLink {
   label: string;
   icon: string;
   to: string;
}
interface LinkMenuItem extends InputMenuLink {
   type: "link";
}
interface ButtonMenuItem {
   type: "button";
   label: string;
   icon: string;
   "aria-label"?: string;
   command: () => void;
}

type RenderedMenuItem = LinkMenuItem | ButtonMenuItem;

const emits = defineEmits(["signoutSuccess", "signoutError"]);
const props = withDefaults(
   defineProps<{
      items: InputMenuLink[];
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

const signUpSystemItems = ref<RenderedMenuItem[]>([
   { type: "link", label: "Sign in", icon: "pi pi-sign-in", to: "/signin" },
   { type: "link", label: "Sign up", icon: "pi pi-user-plus", to: "/signup" },
]);

const signedOutSystemItems = ref<RenderedMenuItem[]>([
   {
      type: "button",
      label: "Sign Out",
      icon: "pi pi-sign-out",
      "aria-label": "Sign out",
      command: onSignout,
   } as ButtonMenuItem,
]);
// computed
// -----------------------------------------
const userLinkItems = computed(() => {
   if (!props.items || !props.items.length) {
      return [] as LinkMenuItem[];
   }

   return props.items.map((item) => {
      return {
         ...item,
         type: "link",
      };
   }) as LinkMenuItem[];
});

const renderedMenuItems = computed(() => {
   return (
      props.userSignedIn
         ? [...userLinkItems.value, ...signedOutSystemItems.value]
         : [...userLinkItems.value, ...signUpSystemItems.value]
   ) as RenderedMenuItem[];
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

      console.log("emitting signoutSuccess");

      emits("signoutSuccess");
   } catch (err) {
      emits("signoutError", {
         type: "unexpected",
         severity: "error",
         summary: toastContent.error.somethingWentWrong.summary,
         detail: toastContent.error.somethingWentWrong.detail,
         json: normalizeError(err),
      } satisfies EmitNotify);
   } finally {
      signOutloading.value = false;
   }
}
</script>
