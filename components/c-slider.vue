<script lang="ts" setup>
import cButton from './c-button.vue'
import leftArrowBlack from '~~/components/icon/leftArrowBlack.vue'
import rightArrowBlack from '~~/components/icon/rightArrowBlack.vue'

type Props = {
  article: any[]
}

defineProps<Props>()

const eventHandler = {
  sliderInit: 0,

  sliderHandler(type: string) {
    const els = [...(document.querySelector('#slider').children as HTMLCollectionOf<HTMLElement>)]

    if (type === 'left' && this.sliderInit < 0) {
      this.sliderInit++
    }

    if (
      type === 'right' &&
      Math.abs(this.sliderInit) < Math.floor(Math.abs(els.length / this.sliderInit))
    ) {
      this.sliderInit--
    }

    els.forEach((el, i) => {
      el.style.transform = `translateX(${(i + this.sliderInit) * 100}%)`
    })
  }
}
</script>

<template>
  <div class="relative">
    <div id="slider" class="max-w-screen relative h-[300px] overflow-hidden">
      <div
        class="absolute top-0 mr-5 h-[300px] w-1/3 p-4 transition-all"
        v-for="(v, i) in article"
        :key="v"
        :style="{ transform: `translateX(calc(${100 * i}%))` }"
      >
        <div class="h-full w-full rounded-md bg-white">
          {{ v }}
        </div>
      </div>
    </div>
    <!-- carousel arrow -->
    <div class="absolute left-0 top-0 flex h-full w-full items-center justify-between px-10">
      <c-button
        type="button"
        :custom-style="{
          border: '0px',
          padding: '10px'
        }"
        :icon-style="{ fill: 'black' }"
        :icon="leftArrowBlack"
        @pointerdown="eventHandler.sliderHandler('left')"
      />

      <c-button
        type="button"
        :custom-style="{
          border: '0px',
          padding: '10px'
        }"
        :icon-style="{ fill: 'black' }"
        :icon="rightArrowBlack"
        @pointerdown="eventHandler.sliderHandler('right')"
      />
    </div>
  </div>
</template>
