import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-18-features/',
  plugins: [
    react({
      babel: {
        configFile: true,
      },
    }),
    eslintPlugin(),
  ],
});
