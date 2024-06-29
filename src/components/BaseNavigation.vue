<script setup lang="ts">
  import { hstack } from 'styled-system/patterns';
  import { button } from 'styled-system/recipes';
  import { css } from 'styled-system/css';
  import BaseLink from '~/components/ui/BaseLink.vue';
  import { Home, ArrowUpRight } from 'lucide-vue-next';

  const { pathname } = defineProps<{ pathname: string }>();
  const isIndex = pathname === '/';
  const btnRecipe = button({ variant: 'ghost' });
</script>

<template>
  <nav
    :class="
      hstack({
        w: 'full',
        h: '80px',
        px: '4',
        gap: '4',
        zIndex: 100,
        position: 'fixed',
        borderBottom: '1px solid',
        borderColor: 'border.subtle',
        bgColor: 'bg.default',
        shadow: 'md',
      })
    "
  >
    <BaseLink
      :class="[
        btnRecipe,
        css({
          ml: isIndex ? '-16' : '0',
          aspectRatio: 1,
          p: '0',
        }),
      ]"
      href="/"
    >
      <Home />
    </BaseLink>
    <BaseLink :class="[btnRecipe]" href="/projects">Projects</BaseLink>
    <BaseLink :class="[btnRecipe]" href="/skills">Skills</BaseLink>
    <div :class="css({ flex: 1 })"></div>
    <BaseLink :class="[btnRecipe]" href="https://vectors.lunarweb.dev">
      simple-2d-vectors
      <ArrowUpRight
        :class="
          css({
            w: '16px',
            h: '16px',
            mb: '2.5',
          })
        "
      />
    </BaseLink>
  </nav>
</template>
