// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'never', // Keep CSS in separate files for readability
    format: 'file' // Creates /about.html instead of /about/index.html
  },
  vite: {
    build: {
      minify: false, // Keep HTML unminified and readable
      cssMinify: false // Keep CSS readable
    }
  }
});
