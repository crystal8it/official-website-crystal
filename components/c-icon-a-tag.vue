<script lang="ts" setup>
type Props = {
  to: string
  ctx: any
  style?: { [key: string]: any }
  class?: string
}

defineProps<Props>()
</script>

<template>
  <a :href="to" target="_blank" rel="noreferrer noopener" class="c-icon-a-tag-class">
    <component :is="ctx" :style="style ?? null"></component>
  </a>
</template>

<style>
.c-icon-a-tag-class svg path {
  transition: 0.3s all ease-in;
}

.c-icon-a-tag-class:hover {
  border-radius: 5px;
  animation: pulse-animation 2s infinite;
}
</style>
