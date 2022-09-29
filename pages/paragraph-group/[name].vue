<script lang="ts" setup>
import scrollTop from '~~/hooks/scrollTop'

useHead({
  title: '好文分享',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

onMounted(() => scrollTop())
</script>

<template>
  <div>
    <c-header-breadcrumb content="好文分享" />
    <h1>{{ $route.params.name }}</h1>
  </div>
</template>
