import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH lets the same build serve from a sub-path (GitHub Pages project
// sites, e.g. /portfolio/). Vercel and Netlify use the default "/".
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  build: { target: 'es2020', cssMinify: true },
});
