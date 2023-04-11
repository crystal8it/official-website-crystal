<script lang="ts" setup>
type Props = {
  gridCustom: string
}

defineProps<Props>()
</script>

<template>
  <section
    class="grid auto-rows-[300px] grid-cols-new3 py-[60px] px-[100px] sm:px-3"
    :class="gridCustom"
  >
    <slot></slot>
  </section>
</template>
