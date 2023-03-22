<script lang="ts" setup>
defineProps<{ width?: string; height?: string; fillBlack: boolean }>()
</script>

<template>
  <svg
    :width="width || 44"
    :height="height || 28"
    viewBox="0 0 44 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.66715 0.75L21.9999 17.559L38.3327 0.75L43.3499 5.95017L21.9999 27.9227L0.649902 5.95017L5.66715 0.75Z"
      :fill="fillBlack ? 'black' : 'white'"
    />
  </svg>
</template>
