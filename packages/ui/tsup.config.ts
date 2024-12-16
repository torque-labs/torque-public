import { defineConfig } from "tsup";
import svgrPlugin from "esbuild-plugin-svgr";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom"],
  injectStyle: false,

  minify: process.env.NODE_ENV === "production",

  esbuildPlugins: [svgrPlugin()],
});
