import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/product-designer-portfolio/',   // change to '/repo-name/' if NOT using a custom domain
})
