import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: null,
    preprocessorOptions: {
        scss: {
          additionalData: `
            @import '../src/scss/config.scss';
            @import '../src/scss/general.scss';
          `
        },
    },
},
})
