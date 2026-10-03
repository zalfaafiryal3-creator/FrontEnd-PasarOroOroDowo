import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      allow: [
        resolve(repoRoot, 'frontend'),
        resolve(repoRoot, 'backend/src/clients'),
        resolve(repoRoot, 'backend/src/models'),
      ],
    },
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
});
