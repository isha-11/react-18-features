import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

const getHTMLPath = (fileName: string) =>
  new URL(fileName, import.meta.url).pathname;

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
  build: {
    rollupOptions: {
      input: {
        index: getHTMLPath('index.html'),
        react17: getHTMLPath('./pages/react-17.html'),
        react18: getHTMLPath('./pages/react-18.html'),
      },
    },
  },
});
