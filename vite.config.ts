// import AutoImport from "unplugin-auto-import/vite";
import tailwindcss from "@tailwindcss/vite"
import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "node:url"
import path from "path"
import copy from "rollup-plugin-copy"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { configDefaults } from "vitest/config"

// Use standard localhost and default port for development
const envHost = "localhost"
const port = 5173

// https://vite.dev/config/
export default defineConfig({
   server: {
      host: envHost,
      port: port,
      strictPort: true, // Ensure it always uses port 5173, and not another port
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
            "utils/index": path.resolve(__dirname, "src/utils/index.ts"),
            "content/index": path.resolve(__dirname, "src/content/index.ts"),
            "types/index": path.resolve(__dirname, "src/types/index.ts"),
         },
         name: "VueLibrary",
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
            "zod",
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
      // AutoImport({
      //    imports: ["vue", "vue-router"],
      //    dirs: ["src/composables/index.ts", "src/stores/index.ts"],
      //    vueTemplate: true,
      // }),
      tailwindcss(),
      dts({
         tsconfigPath: "./tsconfig.app.json",
         include: [
            "src/index.ts",
            "src/components",
            "src/stores",
            "src/router",
            "src/composables",
            "src/utils",
            "src/content",
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
      dedupe: ["vue"], // force single copy
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
})
