import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sitemap(),
    mdx({
      gfm: true,
    }),
  ],
  output: 'static',
  adapter: vercel(),
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
      wrap: true,
    },
    gfm: true,
    remarkPlugins: [remarkGfm],
  },
  prefetch: true,
});
