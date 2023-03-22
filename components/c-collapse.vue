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
    class="duration-400 relative box-border flex w-full items-center gap-[50px] overflow-hidden rounded-full border px-[50px] transition-[max-height] ease-in"
    :class="
      isOpen
        ? 'max-h-[1000px] rounded-2xl bg-white text-[#444]'
        : 'before max-h-[150px] cursor-pointer transition-[max-height] duration-200 ease-in hover:border-none'
    "
  >
    <slot name="icon">
      <component v-bind:is="Icon" v-show="!isOpen"></component>
    </slot>
    <div class="h-full" :class="isOpen ? 'w-full py-20 px-10' : 'w-4/5 p-5'" ref="height">
      <div class="flex w-full">
        <div class="w-3/4">
          <h2 class="text-3xl">{{ Title }}</h2>
          <p v-show="isOpen" class="mt-5 font-zenmaru text-2xl">
            {{ SubTitle[1] }}
          </p>
        </div>
        <img v-show="isOpen" class="w-1/4" :src="Gif.link" :alt="Gif.describe" />
      </div>
      <p v-show="!isOpen" class="mt-5 text-lg">
        {{ SubTitle[0] }}
      </p>

      <transition name="fade">
        <div v-show="isOpen" class="a grid" :class="Grid">
          <p v-for="(value, key) in Content" :key="value + key" class="mt-10 text-xl">
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
      :width="isOpen ? '15px' : '20px'"
      :height="isOpen ? '15px' : '20px'"
      :class="
        isOpen
          ? 'absolute top-5 right-5 z-20 rotate-180 cursor-pointer'
          : 'pointer-events-none w-1/5'
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
