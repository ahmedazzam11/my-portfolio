import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// Builds ONE self-contained HTML file you can double-click (no server needed).
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: { outDir: "dist-single" },
});
