import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/School-Clubs--Ms/", // Matches GitHub repository name
});
