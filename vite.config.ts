import { defineConfig } from "vite";
import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

import { compilerOptions } from "./tsconfig.json";

export default defineConfig({
  base: "/",
  appType: "spa",
  publicDir: "public",
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    cssMinify: "lightningcss",
    outDir: compilerOptions.outDir,
    minify: "terser",
    manifest: false,
    terserOptions: {
      maxWorkers: 2,
      compress: {
        drop_debugger: true,
        drop_console: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: "js/[hash].js",
        entryFileNames: "js/[hash].js",
        assetFileNames: (opt) => {
          const [[, ext]] = Array.from(opt.name.matchAll(/.([0-9-a-z]+)$/g));
          return `${ext}/[hash].${ext}`;
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true,
  },
  plugins: [tsconfigPaths(), react(), svgr()],
});
