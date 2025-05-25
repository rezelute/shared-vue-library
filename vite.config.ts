import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { configDefaults } from "vitest/config";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import copy from "rollup-plugin-copy";

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
   // Build the library for use in other projects
   build: {
      lib: {
         // entry: path.resolve(__dirname, "src/index.ts"),
         entry: {
            index: path.resolve(__dirname, "src/index.ts"),
            "components/index": path.resolve(__dirname, "src/components/index.ts"),
            "stores/index": path.resolve(__dirname, "src/stores/index.ts"),
            "router/index": path.resolve(__dirname, "src/router/index.ts"),
            "composables/index": path.resolve(__dirname, "src/composables/index.ts"),
            "types/index": path.resolve(__dirname, "src/types/index.ts"),
         },
         name: "SharedVueLibrary",
         formats: ["es"],
      },
      rollupOptions: {
         plugins: [
            // manually copy tailwindcss config file to dist folder
            copy({
               targets: [
                  {
                     src: "src/assets/styles/tailwind-config.css",
                     dest: "dist",
                  },
               ],
               verbose: true, // Optional: logs output
               hook: "writeBundle", // Ensures it runs after build output
            }),
         ],
         // input: "src/index.ts", // Entry point
         // When we mark these as an external dependency,
         // we tell Rollup not to include them in the final output bundle because the consumer is expected to provide it externally
         external: [
            "vue",
            "primevue",
            "pinia",
            "vue-router",
            "@primeuix/themes",
            "primeicons",
            "tailwindcss",
            "tailwindcss-primeui",
            "vee-validate",
            "yup",
         ],
         output: {
            // References these as global variables provided by the consuming application
            globals: {
               vue: "Vue",
               primevue: "PrimeVue",
               pinia: "Pinia",
            },
         },
      },
   },
   plugins: [
      vue(),
      // Auto import things like: computed, ref, watch, etc
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
         imports: ["vue", "vue-router"],
         dirs: ["src/composables", "src/stores"],
         vueTemplate: true,
      }),
      tailwindcss(),
      dts({
         tsconfigPath: "./tsconfig.app.json",
         include: [
            "src/index.ts",
            "src/components",
            "src/stores",
            "src/router",
            "src/composables",
            "src/types",
            "src/generated_types",
         ],
      }),
   ],
   // css: {
   //    preprocessorOptions: {
   //       scss: {
   //          api: "modern-compiler",
   //       },
   //    },
   // },
   resolve: {
      alias: {
         "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
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
});
