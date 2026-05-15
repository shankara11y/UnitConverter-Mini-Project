import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/UnitConverter-Mini-Project/",

  plugins: [
    react(),
    tailwindcss(),
  ],
})