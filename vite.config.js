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
    jsxInject: `import React from 'react'`, // Añade automáticamente 'React' en archivos JSX
    loader: 'jsx', // Configura el cargador para procesar JSX
    include: /src\/.*\.jsx?$/, // Asegúrate de que procese archivos en src
  },
});
