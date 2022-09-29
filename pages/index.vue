<script lang="ts" setup>
import scrollTop from '~~/hooks/scrollTop'

useHead({
  title: '關於我們',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

onMounted(() => scrollTop())
</script>

<template>
  <header class="h-screen">
    <h1>Home Page</h1>
  </header>
</template>
