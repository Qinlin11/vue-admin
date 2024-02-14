<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
}>()
const emits = defineEmits(['update:modelValue'])
const filename = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emits('update:modelValue', val)
  },
})
console.log(filename.value);

</script>

<template>
  <div style="display: inline-block">
    <label class="radio-label" style="padding-left: 0">Filename: </label>
    <a-input
    v-model:value="filename"
      placeholder="请输入文件名(默认excel-list)"
      style="width: 345px"
      prefix-icon="icon-document"
    />
  </div>
</template>

<style scoped></style>
