<script lang="ts" setup>
type Props = {
  icon: { ctx: any; style?: { [key: string]: any } }
  to?: string
}

defineProps<Props>()
</script>

<template>
  <a :href="to" target="_blank" rel="noreferrer noopener">
    <component :is="icon.ctx" :style="icon.style ?? null"></component>
  </a>
</template>
