<script lang="ts" setup>
type Crumbs = {
  title: string
  href: string
}

const route = useRoute()

const crumbsTitle = (string: string): string => {
  const id = route.params.id as string
  const name = route.query.name as string

  switch (string) {
    case '/':
      return '首頁'
    case '/about':
      return '關於我們'
    case '/story':
      return '成功案例'
    case '/paragraph-group':
      return '好文分享'
    case `/paragraph-group/${id}?name=${name}`:
      return name
    case '/contact':
      return '聯絡我們'
  }
}

const crumbs = computed<Crumbs[]>(() => {
  const arr = [
    {
      title: '首頁',
      href: '/'
    }
  ]
  const fullPath = route.fullPath
  const params = fullPath.substring(1).split('/')
  let path = ''

  params.forEach((param) => {
    path = `${path}/${decodeURI(param)}`

    arr.push({
      title: crumbsTitle(path) || 'not found',
      href: path
    })
  })

  return arr
})
</script>

<template>
  <div class="flex h-[60px] items-center">
    <template v-for="(crumb, i) in crumbs">
      <div v-if="crumbs.length - 1 === i" :key="crumb.title + i">
        <NuxtLink :to="crumb.href" class="link link-before">{{ crumb.title }}</NuxtLink>
      </div>
      <div v-else :key="crumb.title">
        <NuxtLink :to="crumb.href" class="link link-before">{{ crumb.title }}</NuxtLink>
        <span class="link">/</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.link {
  @apply relative mr-[10px] text-[14px] font-thin;
}

.link-before {
  @apply before:absolute before:-bottom-[3px] before:left-1/2 before:h-[1px] before:w-0 before:-translate-x-1/2 before:bg-white before:transition-all before:duration-300 before:ease-in before:content-[''] hover:before:w-full;
}
</style>
