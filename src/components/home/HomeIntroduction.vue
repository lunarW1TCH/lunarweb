<script setup lang="ts">
  import { card, button } from 'styled-system/recipes';
  import { css } from 'styled-system/css';
  import gala from '../../assets/gala.jpg';
  import BaseLink from '~/components/ui/BaseLink.vue';
  import { Github, Linkedin } from 'lucide-vue-next';
</script>

<template>
  <div :class="card().root">
    <div :class="card().header">
      <h3 :class="card().title">Hello, I am Adrian Żegnałek</h3>
      <div :class="card().description">
        A software developer from Poznań, Poland
      </div>
    </div>
    <div :class="card().body">
      <img
        :class="
          css({
            rounded: 'md',
            borderColor: 'border.muted',
            border: '2px solid',
            maxW: '350px',
            maxH: '350px',
          })
        "
        :src="gala.src"
      />
    </div>
    <div :class="[card().footer, css({ gap: '3' })]">
      <BaseLink
        href="https://github.com/lunarW1TCH"
        :class="[button({ variant: 'outline' }), css({ w: '100%' })]"
      >
        <Github width="16px" height="16px" /> Github
      </BaseLink>
      <BaseLink
        href="https://www.linkedin.com/in/adrian-zegnalek/"
        :class="[button({ variant: 'outline' }), css({ w: '100%' })]"
      >
        <Linkedin width="16px" height="16px" /> LinkedIn
      </BaseLink>
    </div>
  </div>
</template>
