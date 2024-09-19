import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    rollupOptions: {
      input: './index.html', // Entry point of your app
    },
  },
  server: {
    historyApiFallback: true, // Important for client-side routing
  },
});
