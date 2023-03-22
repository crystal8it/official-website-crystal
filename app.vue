<script lang="ts" setup>
import footerCrystal from '~~/components/icon/footerCrystal.vue'
import facebook from './components/icon/facebook.vue'
import line from './components/icon/line.vue'
import telegram from './components/icon/telegram.vue'

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
  { href: '/story', content: 'Story' },
  { href: '/paragraph-group', content: 'Article' },
  { href: '/contact', content: 'Contact' }
]

const footerLink = {
  icons: [
    {
      to: 'line',
      ctx: line,
      style: { width: '40px', height: '40px' }
    },
    {
      to: 'facebook',
      ctx: facebook,
      style: { width: '40px', height: '40px' }
    },
    {
      to: 'telegram',
      ctx: telegram,
      style: { width: '40px', height: '40px' }
    }
  ]
}
</script>

<template>
  <div>
    <c-navbar :links="links" />
    <main class="h-full text-white">
      <NuxtLayout />
    </main>

    <footer
      class="relative box-border h-fit min-h-[150px] w-full items-center bg-gradient-to-r from-[#7674EA] to-[#63B4D1] text-white"
    >
      <footer-crystal></footer-crystal>

      <div
        class="box-border flex h-[150px] w-full items-center justify-between gap-10 bg-[#04132D] pl-[40px] pr-[80px]"
      >
        <!-- logo -->
        <div class="flex h-[60px] items-end">
          <svg
            class="cursor-pointer self-center"
            width="60"
            height="60"
            viewBox="0 0 432 724"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.7737 699.204L402.774 349.204L275.774 372.204L87.7737 699.204Z"
              fill="#0271D8"
            />
            <path
              d="M26.7737 237.704L275.774 372.704L87.7737 699.204L26.7737 237.704Z"
              fill="#FABF3D"
            />
            <path
              d="M275.774 372.458L402.774 349.203L334.274 17.2026L275.774 372.458Z"
              fill="#04E0EE"
            />
            <path
              d="M334.274 17.2029C312.913 154.676 275.791 372.603 275.791 372.603L27.0671 238.476L334.274 17.2029Z"
              fill="#FBEA58"
            />
          </svg>
          <div>
            <h2 class="ml-1 text-xl tracking-[10px]">晶比特設計</h2>
            <h4>&copy; CRYSTAL BIT. DESIGN</h4>
          </div>
        </div>
        <!-- contact -->

        <div class="flex h-[60px] items-end gap-3">
          <div>
            <h2 class="text-xl">CONTACT US</h2>
            <h3 class="mr-5">
              E-mail : <a href="mailto:contact@crystalbit.tw">contact@crystalbit.tw</a>
            </h3>
          </div>
          <c-icon-a-tag
            v-for="(obj, v) in footerLink.icons"
            :key="v"
            :to="obj.to"
            :ctx="obj.ctx"
            :style="obj.style"
          ></c-icon-a-tag>
        </div>
      </div>
    </footer>
  </div>
</template>
