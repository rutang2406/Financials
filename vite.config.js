import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      '/newsapi': { // Proxy for NewsAPI
        target: 'https://newsapi.org',
        changeOrigin: true, // Ensures the host header is modified to match the target
        rewrite: (path) => path.replace(/^\/newsapi/, ''), // Removes '/newsapi' from the request
      },
    },
  },
  plugins: [react()],
});
