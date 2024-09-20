import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    hmr: {
      overlay: true, // Muestra errores de desarrollo en el overlay en la app
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Asegúrate de importar React automáticamente en archivos JSX
    loader: 'jsx', // Cargador para procesar JSX
    include: /src\/.*\.jsx?$/, // Procesar archivos .js y .jsx en el directorio src
    exclude: /node_modules/, // Excluir la carpeta node_modules
  },
});
