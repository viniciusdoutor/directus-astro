// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore — incompatibilidade de versão do Vite entre @tailwindcss/vite e o Vite interno do Astro
    plugins: [tailwindcss()],
  }
});