import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/pharmacy/',   // your repo name
  plugins: [react()],
})
