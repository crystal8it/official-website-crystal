<script lang="ts" setup>
import { computed } from 'vue'
import type { storyData } from '~~/server/api/story.get'
import { useScroll } from '~~/hooks/useHooks'

const story: storyData[] = [
  {
    id: '1',
    title: '財團法人方興中馬匹輔學健康社福基金會-募資頁面',
    content: '文章內容',
    banner: { src: '/img/thrct/banner.png', describe: '希望馬場,樂捐募資' }
  },
  {
    id: '2',
    title: 'ilens',
    content: '文章內容',
    banner: { src: '/img/thrct/banner.png', describe: '123' }
  }
]

const route = useRoute()

const data = computed(() => story.filter((obj) => obj.id === route.params.id))

useHead({
  title: data.value[0].title,
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

onMounted(() => {
  useScroll({ top: 0, behavior: 'smooth' })
})
</script>

<template>
  <div
    class="relative w-full overflow-hidden bg-gradient-to-r from-[#7674EA] to-[#63B4D1] pt-[60px] pb-[20px]"
  >
    <div class="relative z-20 flex h-screen w-full py-[40px] px-[60px] text-white">
      <div class="grid h-full w-2/3 place-items-center">
        <img class="w-full" :src="data[0].banner.src" :alt="data[0].banner.describe" />
      </div>

      <div class="h-full w-1/3">
        <h2 class="my-[20px] text-[25px]">{{ data[0].title }}</h2>
      </div>
    </div>

    <div class="h-full w-full">
      <svg viewBox="0 0 1512 2461" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-2 99C-2 99 407 169.857 803 49C1199 -71.8571 1512 69.9999 1512 69.9999V2193C1512 2193 1290 2411 798 2315C306 2219 -2 2460.5 -2 2460.5V99Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="py-[150px]">
      <c-slider :article="story" />
    </div>
  </div>
</template>

<style scoped>
.clip {
  clip-path: circle(50% at 50% 0);
}
</style>
