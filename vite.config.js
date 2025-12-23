import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    allowedHosts: [
      "devserver-main--rainbow-mochi-371a77.netlify.app",
    ],
  },
});
