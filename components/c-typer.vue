<script lang="ts" setup>
type Props = {
  state: {
    type: string
    title: string
    value: string | number | string[] | any
    labelTailwind?: string
    important?: true | unknown
  }
}

const emit = defineEmits(['get-text'])

defineProps<Props>()

const emitsCallback = (e: Event, string: string, ...arr) => {
  const target = e.target as HTMLInputElement

  if (string === 'checked') {
    const [key, object] = arr
    object[key] = target.checked

    emit('get-text', object)
    return
  }

  if (string === 'value') {
    emit('get-text', target[string])
    return
  }
}
</script>

<template>
  <label
    v-if="state.type !== 'textarea' && state.type !== 'checkbox'"
    class="my-[15px] block"
    :class="state.labelTailwind"
  >
    <p>{{ state.title }} <span v-if="state.important" class="text-red-600">*</span></p>
    <input
      class="w-full border px-[10px] py-[8px] rounded-md mb-[20px]"
      :type="state.type"
      :value="state.value"
      @input.lazy="emitsCallback($event, 'value')"
    />
  </label>

  <div v-else-if="state.type === 'checkbox'" class="my-[15px] block" :class="state.labelTailwind">
    <p>{{ state.title }} <span v-if="state.important" class="text-red-600">*</span></p>
    <div class="inline-block" v-for="(_, key) in state.value" :key="key">
      <input
        class="border px-[10px] py-[8px] rounded-md mb-[20px] mr-[5px]"
        :type="state.type"
        :value="state.value"
        @input.lazy="emitsCallback($event, 'checked', key, state.value)"
      />
      <span class="mr-[15px]">{{ key }}</span>
    </div>
  </div>

  <label v-else-if="state.type === 'textarea'" class="my-[15px] block" :class="state.labelTailwind">
    <p>{{ state.title }}</p>
    <textarea
      class="w-full h-[300px] border p-[10px] resize-none rounded-md"
      :value="state.value"
      @input.lazy="emitsCallback($event, 'value')"
    />
  </label>
</template>
