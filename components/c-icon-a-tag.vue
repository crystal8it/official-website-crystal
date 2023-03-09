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

.pulse {
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% {
    transform: translateY(0px);
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
  }

  25% {
    transform: translateY(-2px);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  }
  75% {
    transform: translateY(0px);
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
  }
}
</style>
