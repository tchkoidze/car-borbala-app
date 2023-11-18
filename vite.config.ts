import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import istanbul from "vite-plugin-istanbul";

export default defineConfig({
  // need to add sourcemaps
  build: {
    sourcemap: true,
  },
  // plugins: [react()], // modify the plugins as below
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  // no changes
  resolve: {
    //
  },
});
