import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    hmr: {
      overlay: true, // Muestra errores en la pantalla
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
  },
});
