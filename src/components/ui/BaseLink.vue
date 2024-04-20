<script setup lang="ts">
  import { link } from 'styled-system/recipes';
</script>

<template>
  <a :class="link()">
    <slot></slot>
  </a>
</template>
