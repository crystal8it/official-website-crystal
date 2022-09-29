<script lang="ts" setup>
type Props = {
  gridCustom: string
}

defineProps<Props>()
</script>

<template>
  <section class="grid grid-cols-3 py-[60px] px-[100px]" :class="gridCustom">
    <slot></slot>
  </section>
</template>
