<script lang="ts" setup>
import scrollTop from '~~/hooks/scrollTop'

useHead({
  title: '聯絡我們',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

onMounted(() => scrollTop())
</script>

<template>
  <c-header-breadcrumb content="聯絡我們" />
</template>
