<script lang="ts" setup>
import { useFog } from '~~/hooks/useCanvasAnimation'
import scrollTop from '~~/hooks/scrollTop'
import CBanner from '~~/components/c-banner.vue'
import CButton from '~~/components/c-button.vue'
import CBackgroundCrystal from '~~/components/c-background-crystal.vue'
import CBackground from '~~/components/c-background.vue'

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

const landing = ref()
const fog = ref()

onMounted(() => {
  fog.value = useFog('galaxy')
  scrollTop()
  window.addEventListener('scroll', () => {
    state.value.isScroll = window.scrollY > screen.height ? true : false
  })

  if (!landing) return
  setTimeout(() => {
    landing.value.remove()
  }, 2000)
})

onBeforeUnmount(() => {
  //@ts-ignore-next-line
  if (fog.value) fog.value.destroy()
})
</script>

<template>
  <!-- landing -->
  <div
    class="fixed top-0 left-0 z-50 h-screen w-full animate-[land_.5s_forwards_1.5s_ease-in] bg-[#100F42]"
    ref="landing"
  >
    <svg
      width="152"
      height="134"
      class="ufo-group absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
      viewBox="0 0 152 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="ufo"
        d="M22.1701 69.7976C21.9878 70.1406 21.82 70.4953 21.6678 70.8612C19.0506 77.1518 22.0285 84.3732 28.3192 86.9904C32.4625 88.7143 37.0096 88.0109 40.3789 85.5323"
        stroke="#FABF3D"
        stroke-width="3"
        stroke-dasharray="34"
        stroke-dashoffset="34"
      />
      <path
        class="ufo"
        d="M52.1877 92.4673C52.0054 92.8103 51.8376 93.165 51.6854 93.5308C49.0681 99.8215 52.046 107.043 58.3367 109.66C64.6274 112.277 71.8487 109.299 74.466 103.009C74.6182 102.643 74.7515 102.274 74.8663 101.903"
        stroke="#FABF3D"
        stroke-width="3"
        stroke-dasharray="42"
        stroke-dashoffset="42"
      />
      <path
        class="ufo"
        d="M109.536 107.419C106.918 113.71 99.697 116.688 93.4063 114.071C89.5355 112.46 86.919 109.107 86.0885 105.299"
        stroke="#FABF3D"
        stroke-width="3"
        stroke-dasharray="42"
        stroke-dashoffset="42"
      />
      <path
        class="ufo"
        d="M113.802 63.5197C128.219 74.8132 135.725 87.2938 131.944 96.3811C126.086 110.46 95.3541 111.063 63.3015 97.7276C31.2489 84.392 10.0138 62.168 15.8714 48.0889C19.5364 39.2799 32.9391 35.7465 50.3102 37.6018"
        stroke="white"
        stroke-width="3"
        stroke-dasharray="226"
        stroke-dashoffset="226"
      />
      <path
        class="ufo"
        d="M58.467 12.9994C60.7711 12.0493 66.0045 14.9775 67.0109 18.4625C68.0566 22.0839 67.1596 25.7518 66.4058 26.0342M66.4058 26.0342C57.2838 29.3281 49.9919 36.4282 46.3278 45.2351C39.5977 61.4111 54.7962 71.0312 70.9723 77.7612C87.1483 84.4913 104.685 88.4909 111.415 72.3148C115.902 61.5308 114.364 48.3222 107.519 38.8576M66.4058 26.0342C74.0387 23.278 82.953 23.1868 92.0955 26.9906C98.7851 29.7738 103.115 33.1048 107.519 38.8576M122.47 39.6278C122.47 39.6278 118.864 35.984 115.87 35.6094C112.398 35.175 109.785 36.1912 107.519 38.8576"
        stroke="#34B6FF"
        stroke-width="3"
        stroke-dasharray="239"
        stroke-dashoffset="239"
      />
      <circle
        class="ufo"
        cx="56.1628"
        cy="13.9494"
        r="2.93733"
        transform="rotate(22.5899 56.1628 13.9494)"
        stroke="#34B6FF"
        stroke-width="3"
        stroke-dasharray="18"
        stroke-dashoffset="18"
      />
      <circle
        class="ufo"
        cx="123.871"
        cy="40.8466"
        r="2.93733"
        transform="rotate(22.5899 123.871 40.8466)"
        stroke="#34B6FF"
        stroke-width="3"
        stroke-dasharray="18"
        stroke-dashoffset="18"
      />
      <path
        class="ufo"
        d="M54.0199 43.1595C58.4952 34.6028 65.8412 31.9 72.0806 30.0801C76.2215 28.8722 78.2099 29.2538 79.0375 30.8557C79.8651 32.4576 78.1528 34.2788 75.5573 34.9956C73.1476 35.6612 71.4158 36.0432 67.1634 38.0846C62.911 40.126 49.4027 51.9874 54.0199 43.1595Z"
        stroke="#F0FDFF"
        stroke-width="3"
        stroke-dasharray="65"
        stroke-dashoffset="65"
      />
    </svg>
  </div>
  <!-- landing -->
  <header class="h-[calc(100vh-2px)]" :class="state.isScroll ? 'relative' : 'sticky top-0 left-0'">
    <div class="absolute top-0 left-0 z-0 h-[calc(100vh-10px)] w-full" id="galaxy"></div>
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
  <!-- section 2 -->
  <section class="background-linear relative z-10 h-[200vh] pt-[100px]">
    <c-background-crystal />
    <c-background />
  </section>
  <section class="h-screen bg-[#00a1c6]"></section>
</template>

<style scoped>
.background-linear {
  background: linear-gradient(to bottom, #100f42 40%, #00a1c6);
}
.ufo {
  animation: ufo 1s ease-in 0.2s forwards;
}

.ufo-group {
  animation: fly 0.5s ease-in 1.2s forwards;
}

@keyframes ufo {
  10% {
    opacity: 0.5;
  }

  50% {
    stroke-dashoffset: 0;
    opacity: 1;
  }

  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes fly {
  to {
    translate: 100vw;
  }
}
</style>
