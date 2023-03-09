<script lang="ts" setup>
import type { storyData } from '~~/server/api/success-data.get'

type Data = {
  result: {
    title: string
    content: { chapterTitle: string; chapterContent: string }[]
    epilogue: string
  }
}

const { data } = await useFetch<storyData>(`/api/success-data?id=${1}`)

useHead({
  title: data.value.title,
  meta: [{ name: 'description', content: 'My amazing site.' }]
})
</script>

<template>
  <div class="relative w-full overflow-hidden bg-white pt-[60px] pb-[20px]">
    <div
      class="absolute top-0 -left-1/4 h-[calc(100vh+30px)] w-[140%] rounded-br-full bg-[#100f42]"
    ></div>

    <div class="relative z-20 flex h-screen w-full py-[40px] px-[60px] text-white">
      <div class="grid h-full w-2/3 place-items-center">
        <img class="w-full" :src="data.banner.src" :alt="data.banner.describe" />
      </div>
      <div class="h-full w-1/3">
        <h2 class="my-[20px] text-[25px]">{{ data.title }}</h2>
      </div>
    </div>

    <div class="relative z-20 h-screen w-full bg-white py-[40px] px-[60px]">
      <h2 class="my-[20px] text-[25px]">{{ data.title }}</h2>
    </div>
  </div>
</template>

<style scoped>
.clip {
  clip-path: circle(50% at 50% 0);
}
</style>
