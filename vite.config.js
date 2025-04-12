import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd());

  return {
    server: {
      host: true,
    },
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
  };
});
