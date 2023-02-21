<script lang="ts" setup>
type Props = {
  service: any[]
  tailwind?: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="relative flex h-[100px] w-full items-center rounded-2xl border border-white pl-[350px]"
    v-for="obj in service"
    :key="obj"
  >
    <h3 class="text-stroke">{{ obj.number }}</h3>
    <p class="text-3xl">{{ obj.content }}</p>
  </div>
</template>

<style scoped>
.text-stroke {
  position: absolute;
  left: 150px;
  top: -82px;
  -webkit-text-fill-color: rgb(250, 204, 21);
  font-size: 100px;
  /* -webkit-text-stroke: 2px white; */
}

.fade-in.active {
  filter: blur(0);
  opacity: 1;
}
</style>
