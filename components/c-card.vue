<script lang="ts" setup>
type Props = {
  info: {
    title: string
    id: string
  }
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    class="bg-white rounded-md"
    :to="{
      path: `/paragraph-group/${info.title}`,
      query: {
        id: info.id
      }
    }"
  >
    <div class="text-gray-600 text-center">
      <h3>{{ info.title }}</h3>
    </div>
  </NuxtLink>
</template>
