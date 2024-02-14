<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps<{
  modelValue: Boolean
}>();

const emits = defineEmits(['update:modelValue']);

const autoWidth = computed({
  get: () => {
    return props.modelValue;
  },
  set: (val) => {
    emits('update:modelValue', val as Boolean);
  },
});
</script>

<template>
  <div style="display: inline-block">
    <label class="radio-label">Cell Auto-Width: </label>
    <a-radio-group v-model:value="autoWidth">
      <a-radio :value="true">True</a-radio>
      <a-radio :value="false">False</a-radio>
    </a-radio-group>
  </div>
</template>

<style scoped >
</style>
