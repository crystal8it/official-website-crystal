<script lang="ts" setup>
useHead({
  titleTemplate: (title) => `Crystal bit | ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'My amazing site.' }],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/assets/Logo.svg'
    }
  ]
})

const links = [
  { href: '/', content: '關於我們' },
  { href: '/paragraph-group', content: '好文分享' },
  { href: '/contact', content: '聯絡我們' }
]
</script>

<template>
  <div>
    <c-navbar :links="links" />
    <c-container>
      <NuxtPage />
    </c-container>
  </div>
</template>
