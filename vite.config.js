import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Maciej/',   // ← to jest wymagane dla GH Pages
})
