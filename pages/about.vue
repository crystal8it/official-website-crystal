<script lang="ts" setup>
import { useScroll } from '~~/hooks/useHooks'

definePageMeta({
  layout: 'blog'
})

useHead({
  title: '關於我們',
  meta: [{ name: 'description', content: 'CrystalBit, 關於我們' }]
})

onMounted(() => useScroll({ top: 0, left: 0, behavior: 'smooth' }))
</script>

<template>
  <div>
    <c-header-breadcrumb content="關於我們" />
    <h2>
      我們對未知領域的挑戰抱有期待,
      且不斷關注科技與趨勢，我們相信，一個具有識別度且高效的網站和系統不僅需要專業的技術支持，還需要深入理解使用者的需求和感受，因此，我們始終將客戶的網站和系統視為自己的作品，盡心投入，精益求精。
    </h2>
  </div>
</template>
