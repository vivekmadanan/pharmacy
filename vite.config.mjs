// vite.config.mjs
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pharmacy/',   // replace with your repo name
  plugins: [react()],
})
