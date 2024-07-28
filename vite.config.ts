import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

import { compilerOptions } from "./tsconfig.json";

export default defineConfig({
  publicDir: "public",
  build: {
    cssCodeSplit: true,
    outDir: compilerOptions.outDir,
    minify: "terser",
    terserOptions: {
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
  },
  plugins: [tsconfigPaths(), react(), svgr()],
});
