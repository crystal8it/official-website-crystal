<script lang="ts" setup>
import { useScroll } from '~~/hooks/useHooks'

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

onMounted(() => useScroll({ top: 0, left: 0, behavior: 'smooth' }))
</script>

<template>
  <div>
    <c-header-breadcrumb content="好文分享" />
    <c-grid grid-custom="gap-[50px] auto-rows-[300px]">
      <c-card
        :to="{
          path: `paragraph-group/${obj.id}`,
          query: { name: obj.title }
        }"
        v-for="obj in result"
        :key="obj.id"
      >
      </c-card>
    </c-grid>
  </div>
</template>
