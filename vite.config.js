import { defineConfig } from "vite";
import multi from '@rollup/plugin-multi-entry';

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: ["index.js", "foo.js"],
    },
  },
  server: {
    strictPort: true,
    origin: "http://127.0.0.1:5173",
  },
  plugins: [
    multi({entryFileName: "aleksis-local-full.js"}),
  ],
});
