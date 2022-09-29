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
    <c-grid grid-custom="gap-[50px] auto-rows-[300px]" :info="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]" />
  </div>
</template>
