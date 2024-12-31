import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      host: true,
      proxy: {
        '/newsapi': {
          target: env.VITE_PROXY_TARGET, // Use the loaded environment variable
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/newsapi/, ''), // Remove "/newsapi" prefix
        },
      },
    },
    plugins: [react()],
  };
});
