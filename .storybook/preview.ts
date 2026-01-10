import "../src/assets/styles/main.css"
import "primeicons/primeicons.css"
import { definePreset } from "@primeuix/themes"
import Lara from "@primeuix/themes/lara"
import { setup } from "@storybook/vue3"
import type { Preview } from "@storybook/vue3-vite"
import PrimeVue from "primevue/config"
import { createRouter, createWebHistory } from "vue-router"

// Green theme
const preset1 = {
   semantic: {
      primary: {
         50: "{green.50}",
         100: "{green.100}",
         200: "{green.200}",
         300: "{green.300}",
         400: "{green.400}",
         500: "{green.500}",
         600: "{green.600}",
         700: "{green.700}",
         800: "{green.800}",
         900: "{green.900}",
         950: "{green.950}",
      },
      colorScheme: {
         light: {
            surface: {
               0: "#fff",
               50: "{amber.50}",
               100: "{zinc.100}",
               200: "{zinc.200}",
               300: "{zinc.300}",
               400: "{zinc.400}",
               500: "{zinc.500}",
               600: "{zinc.600}",
               700: "{zinc.700}",
               800: "{zinc.800}",
               900: "{zinc.900}",
               950: "{zinc.950}",
            },
         },
         dark: {
            surface: {
               0: "{amber.50}",
               50: "{slate.50}",
               100: "{slate.50}",
               200: "{slate.100}",
               300: "{slate.200}",
               400: "{slate.300}",
               500: "{slate.400}",
               600: "{slate.500}",
               700: "{slate.600}",
               800: "{slate.700}",
               900: "{slate.800}",
               950: "{slate.950}",
            },
         },
      },
   },
   components: {
      menubar: {
         colorScheme: {
            light: {
               root: {
                  background: "#fff",
               },
            },
            dark: {
               root: {
                  background: "{surface.900}",
               },
            },
         },
      },
   },
}

const MyPreset = definePreset(Lara, preset1)

// Create a mock router for Storybook
const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: "/",
         name: "home",
         component: { template: "<div>Home</div>" },
      },
   ],
})

// Setup Vue plugins globally for all stories
setup((app) => {
   app.use(router)
   app.use(PrimeVue, {
      theme: {
         preset: MyPreset,
         options: {
            darkModeSelector: ".dark",
         },
      },
   })
})

const preview: Preview = {
   parameters: {
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },

      a11y: {
         // 'todo' - show a11y violations in the test UI only
         // 'error' - fail CI on a11y violations
         // 'off' - skip a11y checks entirely
         test: "todo",
      },
   },
}

export default preview
