import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Compresses every image in src/assets at build time (no effect in dev).
    ViteImageOptimizer({
      jpg: { quality: 72, progressive: true },
      jpeg: { quality: 72, progressive: true },
      png: { quality: 80 },
      webp: { quality: 72 },
      avif: { quality: 55 },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
