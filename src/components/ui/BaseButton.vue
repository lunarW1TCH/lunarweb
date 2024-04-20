<script setup lang="ts">
  import { button } from 'styled-system/recipes';
  import type { ButtonVariantProps } from 'styled-system/recipes/button';

  const { variantProps } = defineProps<{ variantProps?: ButtonVariantProps }>();
</script>

<template>
  <button :class="button(variantProps)"><slot /></button>
</template>
