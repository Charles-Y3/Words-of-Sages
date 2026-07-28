import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      includeAssets: ["robots.txt"],
      manifest: {
        name: "Words of Sages 聖賢之言",
        short_name: "Words of Sages",
        description: "A bilingual reader for Chinese classical texts.",
        start_url: "/",
        display: "standalone",
        background_color: "#f6ead2",
        theme_color: "#a8362a",
        icons: [
          { src: "/icons/icon192.png", sizes: "192x192", type: "image/png" },
          { src: "/icons/icon512.png", sizes: "512x512", type: "image/png" },
          {
            src: "/icons/iconMaskable512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,ico,svg}"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "font",
            handler: "CacheFirst",
            options: {
              cacheName: "wos-fonts",
              expiration: { maxEntries: 60, maxAgeSeconds: 60 * 60 * 24 * 365 }
            }
          }
        ]
      }
    })
  ]
});
