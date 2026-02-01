import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        article: resolve(__dirname, 'article.html'),
        careers: resolve(__dirname, 'careers.html'),
        journal: resolve(__dirname, 'journal.html'),
        'job-listing': resolve(__dirname, 'job-listing.html'),
      }
    }
  }
});
