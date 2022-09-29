<script lang="ts" setup>
import scrollTop from '~~/hooks/scrollTop'

useHead({
  title: '好文分享',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

const info = [
  {
    title: '什麼是網頁?',
    id: 'hiia2pyLZF4hMmmT1lEh'
  },
  {
    title: '什麼是網頁?',
    id: 'hiia2pyLZF4hMmmT1lEh'
  },
  {
    title: '什麼是網頁?',
    id: 'hiia2pyLZF4hMmmT1lEh'
  },
  {
    title: '什麼是網頁?',
    id: 'hiia2pyLZF4hMmmT1lEh'
  }
]

onMounted(() => scrollTop())
</script>

<template>
  <div>
    <c-header-breadcrumb content="好文分享" />
    <c-grid grid-custom="gap-[50px] auto-rows-[300px]">
      <c-card v-for="obj in info" :key="obj.id" :info="obj"></c-card>
    </c-grid>
  </div>
</template>
