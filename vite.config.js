import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: process.env.NODE_ENV === "production" ? "/Portfolio/" : "/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[hash][extname]`,
        chunkFileNames: `assets/[name].[hash].js`,
        entryFileNames: `assets/[name].[hash].js`,
      },
    },
  },
});
