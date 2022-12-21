<script lang="ts" setup>
import scrollTop from '~~/hooks/scrollTop'

definePageMeta({
  layout: 'blog'
})

useHead({
  title: '好文分享',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

type Data = {
  result: {
    title: string
    id: string
  }[]
}

const {
  data: {
    value: { result }
  }
} = await useFetch<Data>(`/api/plist?col=paragraphs`)

onMounted(() => scrollTop())
</script>

<template>
  <div>
    <c-header-breadcrumb content="好文分享" />
    <c-grid grid-custom="gap-[50px] auto-rows-[300px]">
      <c-card v-for="obj in result" :key="obj.id" :info="obj"></c-card>
    </c-grid>
  </div>
</template>
