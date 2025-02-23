import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/HRMastery/process_mapper/",  // ✅ Must match GitHub Pages URL
  build: {
    outDir: "../docs",  // ✅ Must match GitHub Pages setting
  },
});
