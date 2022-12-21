<script lang="ts" setup>
import scrollTop from '~~/hooks/scrollTop'
import CBanner from '~~/components/c-banner.vue'
import CButton from '~~/components/c-button.vue'
import CAnimationBackground from '~~/components/c-background-crystal.vue'
import CBackground from '~~/components/c-background.vue'
import CLanding from '~~/components/c-landing.vue'

useHead({
  title: '關於我們',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

const state = ref<{
  isScroll: boolean
  fog?: HTMLCanvasElement
}>({
  isScroll: false
})

onMounted(() => {
  scrollTop()
  window.addEventListener('scroll', () => {
    state.value.isScroll = window.scrollY > screen.height ? true : false
  })
})
</script>

<template>
  <c-landing></c-landing>

  <header class="h-[calc(100vh-2px)]" :class="state.isScroll ? 'relative' : 'sticky top-0 left-0'">
    <c-banner></c-banner>
    <div
      class="absolute top-1/2 left-[80px] z-10 flex -translate-y-1/2 flex-col items-center gap-3"
    >
      <h1 class="text-[30px] font-[500]">Full Service for Impact Brands.</h1>
      <c-button
        type="button"
        content="開始探索"
        tailwind="border-[3px] px-3 py-1 border-white rounded-full"
      ></c-button>
    </div>
  </header>
  <article class="background-linear relative z-10 h-[200vh] pt-[100px]">
    <c-animation-background></c-animation-background>
    <c-background></c-background>
  </article>
  <article class="h-screen bg-[#00a1c6]"></article>
</template>

<style scoped>
.background-linear {
  background: linear-gradient(to bottom, #100f42 40%, #00a1c6);
}
</style>
