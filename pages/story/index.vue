<script lang="ts" setup>
import { useScroll } from '~~/hooks/useHooks'

definePageMeta({
  layout: 'blog'
})

useHead({
  title: '成功案例',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

type Data = {
  id: string
  title?: string
  content?: string
  img: string
  imgDescribe: string
}[]

const data = ref<Data>([
  {
    id: '1',
    title: '希望馬場',
    img: '/img/thrct/thumbnail.png',
    imgDescribe: '希望馬場'
  },
  {
    id: '2',
    title: 'iLens 愛能視隱形眼鏡 ',
    content: '客製化Cyberbiz網頁',
    img: '/img/ilens/thumbnail.png',
    imgDescribe: 'iLens-愛能視隱形眼鏡 Cyberbiz網頁客製化'
  }
  // {
  //   id: '3',
  //   title: '廣容有限公司',
  //   content: 'PMS管理系統',
  //   img: '/img/ilens/thumbnail.png',
  //   imgDescribe: '廣容有限公司 - PMS系統設計'
  // },
  // {
  //   id: '4',
  //   title: '奇奧有限公司',
  //   content: 'Email Routing設定',
  //   img: '/img/ilens/thumbnail.png',
  //   imgDescribe: 'Email Routing設定, 企業門面打造'
  // }
])

onMounted(() => useScroll({ top: 0, left: 0, behavior: 'smooth' }))
</script>

<template>
  <div>
    <c-header-breadcrumb content="成功案例" />
    <c-grid grid-custom="gap-[50px] auto-rows-[300px]">
      <c-card
        v-for="obj in data"
        :key="obj.id"
        :to="{
          path: `story/${obj.id}`
        }"
      >
        <div class="grid h-full">
          <img class="w-full place-self-center" :src="obj.img" :alt="obj.imgDescribe" />
        </div>
      </c-card>
    </c-grid>
  </div>
</template>
