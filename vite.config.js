import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/My-https://github.com/ahmeeed404/My-Portfolio.git/' // ⚠️ Set to your repo name for GitHub Pages
})