<script lang="ts" setup>
import { useScroll } from '~~/hooks/useHooks'

definePageMeta({
  layout: 'blog'
})

type Data = {
  result: {
    title: string
    content: { chapterTitle: string; chapterContent: string }[]
    epilogue: string
  }
}

const route = useRoute()

const { data } = await useFetch<Data>(`/api/p?col=paragraphs&id=${route.path.split('/')[2]}`)

useHead({
  title: data.value.result.title,
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

onMounted(() => useScroll({ top: 0, left: 0, behavior: 'smooth' }))
</script>

<template>
  <div>
    <c-header-breadcrumb :content="data.result.title" />
    <div class="px-[80px] py-[20px]">
      <div
        class="w-full rounded-md bg-white/100 py-[40px] px-[60px] text-gray-700 backdrop-blur-md"
      >
        <div v-for="obj in data.result.content" :key="obj.chapterTitle" class="text-left">
          <h1 class="my-[20px] text-[25px]">{{ obj.chapterTitle }}</h1>
          <p style="white-space: pre-line" class="my-[20px]">
            {{ obj.chapterContent.replace(/\\n/g, '\n') }}
          </p>
        </div>
        <p>{{ data.result.epilogue }}</p>
      </div>
    </div>
  </div>
</template>
