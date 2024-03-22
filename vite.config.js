import path from "path";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  // Other configurations...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
