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
    loader: 'jsx', // Configurar el loader para JSX
    include: /src\/.*\.[tj]sx?$/, // Procesar archivos .js, .jsx, .ts, .tsx
    exclude: /node_modules/, // Excluir node_modules
  },
});
