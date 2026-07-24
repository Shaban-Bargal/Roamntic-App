import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // بيقرأ من Vercel إذا كان شغال هناك، غير كده يرجع لـ GitHub Pages
  base: process.env.VERCEL ? '/' : '/Roamntic-App/',
})