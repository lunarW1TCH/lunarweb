<script setup lang="ts">
  import { badge, type BadgeVariantProps } from 'styled-system/recipes';

  const { variantProps } = defineProps<{ variantProps?: BadgeVariantProps }>();
</script>

<template>
  <div :class="badge(variantProps)"><slot /></div>
</template>
