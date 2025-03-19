import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { configDefaults } from "vitest/config";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import tailwindcss from "@tailwindcss/vite";

dotenv.config(); // Load environment variables from .env

// Remove "https://" or "http://" from the beginning
const urlWithoutProtocol = process.env.VITE_CLIENT_URL!.startsWith("https://")
   ? process.env.VITE_CLIENT_URL!.slice(8) // removes "https://"
   : process.env.VITE_CLIENT_URL!.slice(7); // removes "http://"

// Now, split by the colon to get host and port
const [envHost, envPort] = urlWithoutProtocol.split(":");
// If no port is provided, set default ports based on the protocol
const port = envPort ? parseInt(envPort) : process.env.VITE_CLIENT_URL!.startsWith("https://") ? 443 : 80;

// https://vite.dev/config/
export default defineConfig({
   server: {
      host: envHost,
      port: port,
      strictPort: true, // Ensure it always uses port 5173, and not another port
      https: {
         key: fs.readFileSync(path.resolve(__dirname, "./ssl/key.pem")),
         cert: fs.readFileSync(path.resolve(__dirname, "./ssl/cert.pem")),
      },
   },
   plugins: [
      vue(),
      // Auto import things like: computed, ref, watch, etc
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
         imports: ["vue", "vue-router"],
         dts: "src/generated_types/auto-imports.d.ts",
         dirs: ["src/composables", "src/stores"],
         vueTemplate: true,
      }),
      tailwindcss(),
   ],
   css: {
      preprocessorOptions: {
         scss: {
            api: "modern-compiler",
         },
      },
   },
   resolve: {
      alias: {
         "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
      // Ensures these are sourced from the applications node_modules directory
      dedupe: ["vue", "pinia", "supertokens-web-js"],
   },
   test: {
      // https://vitest.dev/guide/environment.html
      // Future - use 'browser mode' instead of jsdom once stable? (Currently experimental)
      // https://github.com/vitest-dev/vitest/discussions/5828 https://vitest.dev/guide/browser/#browser-option-types
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "**/*.spec.ts"], // exclude vitest config stuff (node_modules etc), e2e folder and spec files
      include: ["**/*.test.ts"], // Only look for files with .test.js or .test.ts extensions
      root: fileURLToPath(new URL("./", import.meta.url)),
   },
   // Build the library for use in other projects
   build: {
      lib: {
         entry: "./src/components/index.ts",
         name: "VueSharedLibrary",
         fileName: (format) => `vue-shared-library.${format}.js`,
      },
      rollupOptions: {
         external: ["vue", "primevue"],
         output: {
            globals: {
               vue: "Vue",
               primevue: "PrimeVue",
            },
         },
      },
   },
});
