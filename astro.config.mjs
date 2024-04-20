import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx({
      gfm: true,
    }),
    vue(),
  ],
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  markdown: {
    shikiConfig: {
      theme: 'vesper',
      wrap: true,
    },
    gfm: true,
    remarkPlugins: [remarkGfm],
  },
  prefetch: true,
});
