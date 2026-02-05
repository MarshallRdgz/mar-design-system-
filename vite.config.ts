import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['storybook'],
  },
  // MODIFICACIÓN: Agregado para evitar que React se duplique entre la librería y el proyecto
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
});
