<script lang="ts" setup>
import { useScroll } from '~~/hooks/useHooks'

definePageMeta({
  layout: 'blog'
})

useHead({
  title: '關於我們',
  meta: [{ name: 'description', content: 'CrystalBit, 關於我們' }]
})

onMounted(() => useScroll({ top: 0, left: 0, behavior: 'smooth' }))
</script>

<template>
  <div>
    <c-header-breadcrumb content="關於我們" />
  </div>
</template>
