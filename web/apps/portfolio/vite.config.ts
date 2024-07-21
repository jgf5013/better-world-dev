import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { UserConfig, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { Plugin as TsconfigPathsPlugin }  from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

installGlobals();

const userConfig: UserConfig = {
  plugins: [remix(), tsconfigPaths()  as TsconfigPathsPlugin, vanillaExtractPlugin()],
  optimizeDeps: {
    esbuildOptions: {
      jsx: "automatic",
    }
  },
  resolve: {
    dedupe: ["react", "react-dom"]
  },
};
export default defineConfig(userConfig);
