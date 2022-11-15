<script lang="ts" setup>
type Props = {
  state: {
    type: string
    title: string
    value: string | number | string[] | any
    //The purpose of any is for combination with type checkbox or type radio, Please pass => {'key':boolean,'key':boolean} , => the key of object is for render
    labelTailwind?: string
    important?: true | unknown
    //The purpose of radioName is for combination with type radio, Please pass string in
    radioName?: string | any
  }
}

const emit = defineEmits(['get-text'])

defineProps<Props>()

const emitsCallback = (e: Event, string: string, ...arr) => {
  const target = e.target as HTMLInputElement

  if (string === 'checked') {
    const [key, object] = arr
    object[key] = target[string]

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
    v-if="state.type !== 'textarea' && state.type !== 'checkbox' && state.type !== 'radio'"
    class="my-[15px] block"
    :class="state.labelTailwind"
  >
    <p>{{ state.title }} <span v-if="state.important" class="text-red-600">*</span></p>
    <input
      class="w-full border px-[10px] py-[8px] rounded-md mb-[20px] mt-[5px]"
      :type="state.type"
      :value="state.value"
      @input.lazy="emitsCallback($event, 'value')"
    />
  </label>

  <div v-else-if="state.type === 'checkbox'" class="my-[15px] block" :class="state.labelTailwind">
    <p>{{ state.title }} <span v-if="state.important" class="text-red-600">*</span></p>
    <div class="flex mt-[5px]">
      <div class="flex items-center" v-for="(_, key) in state.value" :key="key">
        <label
          class="rounded-[100px] w-[30px] h-[30px] border border-gray-200 relative cursor-pointer mr-[5px]"
        >
          <input
            class="absolute top-0 left-0 opacity-0 custom-checkbox cursor-pointer"
            :type="state.type"
            @input.lazy="emitsCallback($event, 'checked', key, state.value)"
          />
          <span></span>
        </label>
        <span class="mr-[15px]">{{ key }}</span>
      </div>
    </div>
  </div>

  <div v-else-if="state.type === 'radio'" class="my-[15px] block" :class="state.labelTailwind">
    <p>{{ state.title }} <span v-if="state.important" class="text-red-600">*</span></p>
    <div class="flex mt-[5px]">
      <div class="flex items-center" v-for="(_, key) in state.value" :key="key">
        <label
          class="rounded-[100px] w-[30px] h-[30px] border border-gray-200 relative cursor-pointer mr-[5px]"
        >
          <input
            class="absolute top-0 left-0 opacity-0 custom-checkbox cursor-pointer"
            :type="state.type"
            :name="state.radioName"
            @input.lazy="emitsCallback($event, 'checked', key, state.value)"
          />
          <span></span>
        </label>
        <span class="mr-[15px]">{{ key }}</span>
      </div>
    </div>
  </div>

  <label v-else-if="state.type === 'textarea'" class="my-[15px] block" :class="state.labelTailwind">
    <p>{{ state.title }}</p>
    <textarea
      class="w-full h-[300px] border p-[10px] resize-none rounded-md mt-[5px]"
      :value="state.value"
      @input.lazy="emitsCallback($event, 'value')"
    />
  </label>
</template>

<style scpoed>
.custom-checkbox:checked ~ span {
  @apply rounded-[100px] w-[15px] h-[15px] bg-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer mr-[5px];
}
</style>
