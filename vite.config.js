import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Esto asegura que los recursos se resuelvan correctamente en producción
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    hmr: {
      overlay: true, // Habilitar superposición de errores en el desarrollo
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './index.html',
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Importar React automáticamente
    loader: 'jsx', // Configura el cargador para procesar JSX
    include: /src\/.*\.jsx?$/, // Procesa archivos en src
    exclude: /node_modules/, // Excluir node_modules
  },
});
