import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  build: {
    // Prevent api/ files from being bundled into the client output
    // They should remain as separate serverless functions
    rollupOptions: {
      external: ['api/**'],
    },
  },
})
