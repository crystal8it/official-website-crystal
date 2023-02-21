<script lang="ts" setup>
type Props = {
  info: {
    title?: string
    id: string
  }
  tailwind?: string
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    class="rounded-md bg-white"
    :class="tailwind"
    :to="{
      path: `/paragraph-group/${info.id}`,
      query: {
        name: info.title
      }
    }"
  >
    <div class="text-center text-gray-600">
      <h3>{{ info.title }}</h3>
    </div>
  </NuxtLink>
</template>
