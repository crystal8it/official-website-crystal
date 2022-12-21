<script lang="ts" setup>
defineProps<{
  type: string
  content: string
  to?: string
  tailwind?: string
}>()
</script>

<template>
  <NuxtLink
    v-if="type === 'router'"
    to="/paragraph/createParagraph"
    class="button-style"
    :class="tailwind"
  >
    {{ content }}
  </NuxtLink>
  <button v-else-if="type === 'button'" class="button-style" :class="tailwind">
    {{ content }}
  </button>
</template>

<style>
.button-style {
  @apply text-center  text-white;
}
</style>
