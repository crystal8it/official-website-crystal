<script lang="ts" setup>
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
  { href: '/about', content: 'About Us' },
  { href: '/paragraph-group', content: 'Article' },
  { href: '/contact', content: 'Contact' }
]
</script>

<template>
  <div>
    <c-navbar :links="links" />
    <c-container>
      <NuxtLayout />
    </c-container>
  </div>
</template>
