<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

type Props = {
  to: RouteLocationRaw
  tailwind?: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink class="rounded-md bg-white" :class="tailwind" :to="to">
    <slot></slot>
  </NuxtLink>
</template>
