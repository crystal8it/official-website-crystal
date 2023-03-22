<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

type Props = {
  to: RouteLocationRaw
  backgroundImg?: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :style="{ 'background-image': 'url(' + backgroundImg + ')' }"
    class="hover rounded-md bg-white bg-cover bg-center bg-no-repeat text-[#444]"
    :to="to"
  >
    <slot></slot>
  </NuxtLink>
</template>

<style>
.hover:hover {
  animation: pulse-animation 2s infinite;
}
</style>
