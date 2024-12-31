import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      '/newsapi': {
        target: 'https://server-kcc1.onrender.com/', // Proxy to your hosted server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/newsapi/, ''),
      },
    },
  },
  plugins: [react()],
});