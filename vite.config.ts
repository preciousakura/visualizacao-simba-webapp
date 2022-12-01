import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/visualizacao-simba-webapp/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'heading-color': '#f00'
        },
        javascriptEnabled: true
      }
    }
  }
});
