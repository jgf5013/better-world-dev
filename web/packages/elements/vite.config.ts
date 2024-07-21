import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  root: __dirname,
  cacheDir: "../../../node_modules/.vite/web/packages/elements",

  plugins: [react(), dts(), tsconfigPaths(), vanillaExtractPlugin()],
  build: {
    lib: { entry: "./src/index.ts", formats: ["es"] },
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  },
  resolve: {
    dedupe: ["react", "react-dom"]
  },
  optimizeDeps: {
    esbuildOptions: {
      jsx: "automatic",
    }
  }
});
