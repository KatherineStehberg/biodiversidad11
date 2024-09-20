import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  esbuild: {
    loader: 'jsx', // Procesar JSX en los archivos .jsx
    include: /src\/.*\.jsx?$/, // Asegura que procese archivos en src
    exclude: [],
  },
});
