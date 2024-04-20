<script setup lang="ts">
  import { hstack } from 'styled-system/patterns';
  import { button } from 'styled-system/recipes';
  import { css } from 'styled-system/css';
  import BaseLink from '~/components/ui/BaseLink.vue';
  import { Home } from 'lucide-vue-next';
  import { navigate } from 'astro:transitions/client';

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
      @click="navigate('/')"
    >
      <Home />
    </BaseLink>
    <BaseLink :class="[btnRecipe]" @click="navigate('/projects')">
      Projects
    </BaseLink>
    <BaseLink :class="[btnRecipe]" @click="navigate('/skills')">
      Skills
    </BaseLink>
  </nav>
</template>
