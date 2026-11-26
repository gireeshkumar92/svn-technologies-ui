import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps the build working under any GitHub Pages path
// (https://<user>.github.io/<repo>/ or a custom domain).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false, chunkSizeWarningLimit: 700 },
});
