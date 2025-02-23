import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/HRMastery/process_mapper/",  // ✅ Ensure this matches the repo path exactly
  build: {
    outDir: "docs",  // ✅ Output should go to /docs so GitHub Pages can serve it
  },
});
