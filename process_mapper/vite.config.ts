import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/HRMastery/process-mapper/", // Set your GitHub repo path
  build: {
    outDir: "dist",
  },
});
