<script lang="ts" setup>
import { useFog } from '~~/hooks/useCanvasAnimation'
useHead({
  titleTemplate: (title) => `Crystal bit | ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})

const links = [
  { href: '/', content: 'About Us' },
  { href: '/paragraph-group', content: 'Article' },
  { href: '/contact', content: 'Contact' }
]

const fog = ref()

onBeforeMount(() => {
  fog.value = useFog('galaxy')
})

onBeforeUnmount(() => {
  //@ts-ignore-next-line
  if (fog.value) fog.value.destroy()
})
</script>

<template>
  <div>
    <c-navbar :links="links" />
    <div class="absolute top-0 left-0 z-0 h-[calc(100vh-10px)] w-full" id="galaxy"></div>
    <c-container>
      <NuxtLayout />
    </c-container>
  </div>
</template>
