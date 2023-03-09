<script lang="ts" setup>
defineProps<{ width?: string; height?: string }>()
</script>

<template>
  <svg
    :width="width || '14'"
    :height="height || '14'"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.611921 7.66295L13.297 7.66295L7.4704 1.83637L8.95049 0.366699L17.2891 8.70527L8.95049 17.0438L7.48082 15.5742L13.297 9.74759H0.611921V7.66295Z"
      fill="white"
    />
  </svg>
</template>
