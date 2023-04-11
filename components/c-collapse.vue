<script lang="ts" setup>
import { ref } from 'vue'
import checkPoint from '~~/components/icon/checkPoint.vue'
export type CollapseProps = {
  Title: string
  SubTitle: [string, string]
  Content: { [key: string]: string }
  Icon: object
  Gif: {
    link: string
    describe: string
  }
  Grid: string
}

defineProps<CollapseProps>()

const height = ref()
const isOpen = ref(false)
</script>

<template>
  <div
    @pointerdown="isOpen = true"
    class="duration-400 relative box-border flex w-full items-center gap-[50px] overflow-hidden rounded-full border px-[50px] transition-[max-height] ease-in sm:gap-2 sm:px-2"
    :class="
      isOpen
        ? 'max-h-[1500px] rounded-2xl bg-white text-[#444]'
        : 'before max-h-[150px] cursor-pointer transition-[max-height] duration-200 ease-in hover:border-none'
    "
  >
    <slot name="icon">
      <component v-bind:is="Icon" v-show="!isOpen" class="sm:w-10"></component>
    </slot>
    <div class="h-full" :class="isOpen ? 'w-full py-20 px-10 sm:px-2' : 'w-4/5 p-5'" ref="height">
      <div class="flex w-full">
        <div class="w-3/4">
          <h2 class="text-3xl sm:text-lg">{{ Title }}</h2>
          <p v-show="isOpen" class="mt-5 font-zenmaru text-2xl sm:text-sm">
            {{ SubTitle[1] }}
          </p>
        </div>
        <img v-show="isOpen" class="w-1/4" :src="Gif.link" :alt="Gif.describe" />
      </div>
      <p v-show="!isOpen" class="mt-5 hidden text-lg">
        {{ SubTitle[0] }}
      </p>

      <transition name="fade">
        <div v-show="isOpen" class="grid sm:grid-cols-1" :class="Grid">
          <p v-for="(value, key) in Content" :key="value + key" class="mt-10 text-xl sm:text-sm">
            <span class="font-medium">{{ key }}</span
            ><br />
            <span class="mt-2 inline-block font-light">{{ value }}</span>
          </p>
        </div>
      </transition>
    </div>

    <check-point
      @pointerdown.stop="isOpen = false"
      :fillBlack="isOpen"
      :class="
        isOpen
          ? 'absolute top-5 right-5 z-20 h-[15px] w-[15px] rotate-180 cursor-pointer'
          : 'pointer-events-none h-[20px] w-[20px]'
      "
    ></check-point>
  </div>
</template>

<style scoped>
.before {
  @apply before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rounded-2xl  before:transition-all before:duration-500 before:content-[''] hover:before:bg-gradient-to-r hover:before:from-[#7674EA] hover:before:to-[#20F2FF];
}

.animation_text_in {
  animation: text-in 3s ease-in forwards;
}

.fade-enter-active,
.face-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
