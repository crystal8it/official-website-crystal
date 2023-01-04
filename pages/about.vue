<script lang="ts" setup>
import scrollTop from '~~/hooks/scrollTop'

definePageMeta({
  layout: 'blog'
})

useHead({
  title: '關於我們',
  meta: [{ name: 'description', content: 'CrystalBit, 關於我們' }]
})

onMounted(() => scrollTop())
</script>

<template>
  <div>
    <c-header-breadcrumb content="關於我們" />
  </div>
</template>
