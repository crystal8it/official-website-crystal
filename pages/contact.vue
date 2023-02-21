<script lang="ts" setup>
import { useScroll } from '~~/hooks/useHooks'

definePageMeta({
  layout: 'blog'
})

useHead({
  title: '聯絡我們',
  meta: [{ name: 'description', content: 'My amazing site.' }]
})

onMounted(() => useScroll({ top: 0, left: 0, behavior: 'smooth' }))

const typerStates = ref([
  {
    type: 'text',
    title: '姓名',
    value: '',
    labelTailwind: 'text-left',
    important: true
  },
  {
    type: 'text',
    title: '聯絡信箱',
    value: '',
    labelTailwind: 'text-left',
    important: true
  },
  {
    type: 'text',
    title: '聯絡電話',
    value: '',
    labelTailwind: 'text-left'
  },
  {
    type: 'text',
    title: '聯絡公司名稱',
    value: '',
    labelTailwind: 'text-left'
  },
  {
    type: 'checkbox',
    title: '選項',
    value: { 網站設計: false, App設計: false, ERP設計: false, 'UI/UX設計': false, 其它: false },
    labelTailwind: 'text-left'
  },
  {
    type: 'textarea',
    title: '備註',
    value: '',
    labelTailwind: 'text-left'
  }
])

const submitData = (event: Event) => {
  typerStates.value.forEach((obj) => console.log(obj.value))
}
</script>

<template>
  <div>
    <c-header-breadcrumb content="聯絡我們" />
    <div class="px-[80px] py-[20px]">
      <div
        class="relative w-full rounded-md bg-white/100 py-[40px] px-[60px] text-gray-700 backdrop-blur-md"
      >
        <div class="flex flex-row-reverse">
          <img src="@/assets/form.jpg" alt="插圖設計" class="h-[150px]" />
        </div>
        <form @submit.prevent="submitData">
          <c-typer
            v-for="state in typerStates"
            :key="state.title"
            :state="state"
            @get-text="(value) => (state.value = value)"
          />
          <div class="flex items-center">
            <div class="flex flex-[50%] flex-shrink-0 flex-grow-0 items-center justify-center">
              <img src="@/assets/mascot.jpg" alt="插圖設計" class="h-[200px]" />
            </div>
            <c-button
              type="button"
              content="聯絡我們"
              tailwind="bg-gray-500 mt-[40px] w-full h-[60px]"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
