<script setup lang="ts">
  import { badge, type BadgeVariantProps } from '~panda/recipes';

  const { variantProps } = defineProps<{ variantProps?: BadgeVariantProps }>();
</script>

<template>
  <div :class="badge(variantProps)"><slot /></div>
</template>
