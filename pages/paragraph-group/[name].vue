<script lang="ts" setup>
import scrollTop from '~~/hooks/scrollTop'

type Data = {
  result: {
    title: string
    content: { chapterTitle: string; chapterContent: string }[]
    epilogue: string
  }
}

const route = useRoute()

const { data } = await useFetch<Data>(`/api/p?col=paragraphs&id=${route.query.id}`)

useHead({
  title: data.value.result.title,
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

onMounted(() => scrollTop())
</script>

<template>
  <div>
    <c-header-breadcrumb :content="data.result.title" />
    <div class="px-[80px] py-[20px]">
      <div
        class="bg-white/100 backdrop-blur-md w-full rounded-md py-[40px] px-[60px] text-gray-700"
      >
        <div v-for="obj in data.result.content" :key="obj.chapterTitle" class="text-left">
          <h1 class="text-[25px] my-[20px]">{{ obj.chapterTitle }}</h1>
          <p style="white-space: pre-line" class="my-[20px]">
            {{ obj.chapterContent.replace(/\\n/g, '\n') }}
          </p>
        </div>
        <p>{{ data.result.epilogue }}</p>
      </div>
    </div>
  </div>
</template>
