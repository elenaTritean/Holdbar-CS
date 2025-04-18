import { defineConfig } from 'vite'
import { patchCssModules } from 'vite-css-modules'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), patchCssModules({generateSourceTypes: true})],
})
