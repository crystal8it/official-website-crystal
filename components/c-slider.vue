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
  <div class="relative w-full">
    <div id="slider" class="max-w-screen relative h-[300px] overflow-hidden">
      <div
        class="absolute top-0 mr-5 h-[300px] w-1/3 p-4 transition-all"
        v-for="(v, i) in article"
        :key="v"
        :style="{ transform: `translateX(calc(${100 * i}%))` }"
      >
        <div
          class="h-full w-full cursor-pointer rounded-md bg-white"
          @pointerdown="
            $router.push({
              path: `/paragraph-group/${v.id}`,
              query: {
                name: v.title
              }
            })
          "
        >
          <h2 class="text-center text-[#444]">{{ v.title }}</h2>
        </div>
      </div>
    </div>

    <c-button
      class="absolute left-[25px] top-1/2 -translate-y-1/2"
      :custom-style="{
        width: '40px',
        height: '40px',
        border: '0px',
        padding: '10px'
      }"
      :icon-style="{ fill: 'black' }"
      :icon="leftArrowBlack"
      @pointerdown="eventHandler.sliderHandler('left')"
    />

    <c-button
      class="absolute right-[25px] top-1/2 -translate-y-1/2"
      type="button"
      :custom-style="{
        width: '40px',
        height: '40px',
        border: '0px',
        padding: '10px'
      }"
      :icon-style="{ fill: 'black' }"
      :icon="rightArrowBlack"
      @pointerdown="eventHandler.sliderHandler('right')"
    />
  </div>
</template>
