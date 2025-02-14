import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
  },
  base: "./Yee-Honk-2.0/",
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