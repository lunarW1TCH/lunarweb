<script setup lang="ts">
  import { button } from '~panda/recipes';
  import type { ButtonVariantProps } from '~panda/recipes/button';

  const { variantProps } = defineProps<{ variantProps?: ButtonVariantProps }>();
</script>

<template>
  <button :class="button(variantProps)"><slot /></button>
</template>
