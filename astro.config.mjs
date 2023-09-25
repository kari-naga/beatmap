import { defineConfig } from 'astro/config';
import Tailwind from '@astrojs/tailwind';
import Icons from 'unplugin-icons/vite';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [Tailwind(), solidJs()],
  vite: {
    plugins: [Icons({
      compiler: 'solid',
      autoInstall: true
    })]
  }
});