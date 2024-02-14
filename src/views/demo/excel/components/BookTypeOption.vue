<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const options = ref(['xlsx', 'csv', 'txt'])
const emits = defineEmits(['update:modelValue'])
const bookType = computed({
  get: () => {
    return props.modelValue
  },
  set: (val) => {
    emits('update:modelValue', val)
    console.log(val);
    
  },
})


</script>

<template>
  <div style="display: inline-block">
    <label class="radio-label">Book Type: </label>
    <a-select v-model:value="bookType" style="width: 120px">
      <a-select-option v-for="item in options" :key="item" :value="item">{{ item }}</a-select-option>
    </a-select>
  </div>
</template>

<style scoped></style>
