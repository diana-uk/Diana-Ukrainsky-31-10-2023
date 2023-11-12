import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Diana-Ukrainsky-31-10-2023/",
  plugins: [svgr(), react()],
  server: {
    proxy: {
      "/api": {
        target: "https://dataservice.accuweather.com/",
        changeOrigin: true,
        onProxyReq: (proxyReq) => {
          // Manually remove the "/api" prefix from the outgoing request path
          proxyReq.path = proxyReq.path.replace(/^\/api/, "");
        },
      },
    },
  },
});
