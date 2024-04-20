import { defineConfig } from '@pandacss/dev';
import globalCss from './src/styles/global-styles';
import { createPreset } from '@park-ui/panda-preset';

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: 'mint',
      grayColor: 'sage',
      borderRadius: 'sm',
    }),
  ],
  include: [
    './src/**/*.{ts,tsx,js,jsx,astro,mdx,vue}',
    './pages/**/*.{ts,tsx,js,jsx,astro,mdx,vue}',
  ],
  outdir: 'styled-system',
  jsxFramework: 'react',
  jsxStyleProps: 'all',
  shorthands: true,
  gitignore: true,
  watch: true,
  globalCss,
  theme: {
    extend: {
      tokens: {
        fonts: {
          firaCode: {
            value: 'var(--font-fira-code)',
          },
          dosis: {
            value: 'var(--font-dosis)',
          },
        },
      },
    },
  },
});
