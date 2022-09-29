<script lang="ts" setup>
type Props = {
  gridCustom: string
  info: any[]
}

defineProps<Props>()
</script>

<template>
  <section class="grid grid-cols-3 py-[30px]" :class="gridCustom">
    <NuxtLink v-for="obj in info" :key="obj" class="bg-white rounded-md" to="/">
      <div>
        {{ obj }}
      </div>
    </NuxtLink>
  </section>
</template>
