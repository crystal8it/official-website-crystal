<script lang="ts" setup>
type Props = {
  links: {
    href: string
    content: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <nav class="w-full h-[60px] flex items-center justify-between px-[20px]">
    <div class="flex items-center">
      <svg
        width="40"
        height="40"
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
        <h1 class="text-[20px] text-gray-700">CRYSTAL BIT.</h1>
        <h4 class="text-[12px] text-gray-400">WEB DESIGN / SYSTEM DESIGN</h4>
      </div>
    </div>

    <div class="flex">
      <NuxtLink
        v-for="obj in links"
        :key="obj.href"
        :to="obj.href"
        class="mr-[10px] text-gray-400 navbar-link"
        >{{ obj.content }}</NuxtLink
      >
    </div>
  </nav>
</template>

<style scoped>
.navbar-link {
  @apply relative before:content-[''] before:absolute before:-bottom-[3px] before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[1px] before:bg-gray-600 before:transition-all before:duration-150 before:ease-in;
}
a.router-link-active {
  @apply text-gray-600 relative  before:content-[''] before:absolute before:-bottom-[3px] before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[1px] before:bg-gray-600 hover:before:w-full before:transition-all before:duration-150 before:ease-in;
}

a.router-link-exact-active {
  @apply text-gray-600 relative before:content-['']  before:absolute before:-bottom-[3px] before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[1px] before:bg-gray-600 hover:before:w-full before:transition-all before:duration-150 before:ease-in;
}
</style>
