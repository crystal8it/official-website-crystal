<script lang="ts" setup>
type Props = {
  gridCustom: string
}

defineProps<Props>()
</script>

<template>
  <section class="grid grid-cols-new3 gap-2 py-[60px] px-[100px]" :class="gridCustom">
    <slot></slot>
  </section>
</template>
