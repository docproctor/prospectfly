import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    // Strip console.log in production unless VITE_ENABLE_LOGS=true
    pure: process.env.VITE_ENABLE_LOGS === 'true' ? [] : ['console.log'],
  },
})
