import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      input: './index.html', // Entry point of your app
    },
  },
  server: {
    port: 3000, // Specify the port for local development
    open: true, // Automatically opens the browser when running locally
  },
  // This setting ensures client-side routing works when deployed
  resolve: {
    alias: {
      '@': '/src', // Optional: if you're using aliases for imports
    },
  },
});
