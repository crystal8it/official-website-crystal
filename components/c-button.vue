<script lang="ts" setup>
defineProps<{
  type: string
  content?: string
  to?: string
  tailwind?: string
  customStyle?: { [key: string]: string }
  iconStyle?: { [key: string]: string }
  icon?: any
}>()
</script>

<template>
  <NuxtLink
    v-if="type === 'router'"
    :to="to"
    class="button-style"
    :style="customStyle"
    :class="tailwind"
  >
    <p>
      {{ content }}
    </p>
    <component :is="icon" :style="iconStyle"></component>
    <component :is="icon" :style="iconStyle"></component>
  </NuxtLink>
  <a
    v-else-if="type === 'button' && to"
    :href="to"
    class="button-style"
    :style="customStyle"
    :class="tailwind"
  >
    <p class="mb-[5px]">
      {{ content }}
    </p>
    <component :is="icon" :style="iconStyle"></component>
  </a>

  <button v-else :href="to" class="button-style" :style="customStyle" :class="tailwind">
    <span>
      {{ content }}
    </span>
    <component :is="icon" :style="iconStyle"></component>
  </button>
</template>

<style>
.button-style {
  @apply flex h-[50px] items-center gap-1 rounded-full border-[3px] border-white px-10;
}
</style>
