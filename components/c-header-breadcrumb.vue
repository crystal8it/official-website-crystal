<script lang="ts" setup>
defineProps<{ content: string }>()
</script>

<template>
  <header class="h-[150px]">
    <c-breadcrumb></c-breadcrumb>
    <h1 class="text-[25px] under_line">{{ content }}</h1>
  </header>
</template>

<style scoped>
.under_line {
  @apply relative before:content-[''] before:absolute before:-bottom-[1px] before:left-0 before:w-1/5 before:h-[1px] before:bg-white;
}
</style>
