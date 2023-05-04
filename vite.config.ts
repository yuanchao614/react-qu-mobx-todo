import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'react-qu-mobx-todo',
  plugins: [react()],
  build: {
   outDir: 'dist',
   assetsDir: '',
  }
})
