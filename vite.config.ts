import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
const __dirname = new URL('.', import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@data': '/src/data',
      '@types': '/src/types',
    },
  },
});
