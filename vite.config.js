import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
  },
  base: "./",
  build: {
    outDir: '.', 
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
});