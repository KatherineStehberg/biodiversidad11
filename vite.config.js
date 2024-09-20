import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000, // Use the Render-provided port or fallback to 3000
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Opcional: facilita la importación desde la carpeta src
    },
  },
  esbuild: {
    loader: 'jsx', // Asegura que esbuild procese JSX correctamente
    include: /src\/.*\.jsx?$/, // Procesa archivos .js y .jsx
    exclude: [],
  },
});
