<script setup lang="ts">
  import { link } from '~panda/recipes';
</script>

<template>
  <a :class="link()">
    <slot></slot>
  </a>
</template>
