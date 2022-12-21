<script lang="ts" setup>
defineProps<{ content: string }>()
</script>

<template>
  <header class="h-[150px]">
    <c-breadcrumb></c-breadcrumb>
    <h1 class="under_line text-[25px]">{{ content }}</h1>
  </header>
</template>

<style scoped>
.under_line {
  @apply relative before:absolute before:-bottom-[1px] before:left-0 before:h-[1px] before:w-1/5 before:bg-white before:content-[''];
}
</style>
