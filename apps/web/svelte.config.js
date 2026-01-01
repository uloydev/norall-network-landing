import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      out: 'build',
      precompress: true,
      envPrefix: 'PUBLIC_',
    }),
    alias: {
      $components: 'src/components',
      $lib: 'src/lib',
      $styles: 'src/styles',
      $assets: 'src/lib/assets',
    },
  },
};

export default config;
