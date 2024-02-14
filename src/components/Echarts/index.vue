<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>

<script lang="ts" setup>
import type { ECBasicOption } from 'echarts/types/dist/shared';
import { onMounted, onUnmounted, watchEffect, ref } from 'vue';
import echarts from './lib/echarts';

interface DefineProps {
  width?: string;
  height?: string;
  option: ECBasicOption;
}

const props = withDefaults(defineProps<DefineProps>(), {
  width: '100%',
  height: '100%',
});

const chartRef = ref<HTMLDivElement | null>(null);
let initialized = false;

/** 销毁 echarts */
const dispose = () => {
  if (chartRef.value && echarts) {
    echarts.dispose(chartRef.value);
  }
};

const init = () => {
  if (!initialized && chartRef.value && echarts) {
    // 销毁 echarts 后再初始化
    dispose();

    // 初始化 chart
    const chartInstance = echarts.init(chartRef.value as HTMLDivElement);
    chartInstance.setOption(props.option);

    // 设置标志，表示已经初始化过了
    initialized = true;
  }
};

onMounted(() => {
  init();
  window.addEventListener("resize", init);
});

onUnmounted(() => {
  window.removeEventListener("resize", init);
  dispose();
});

watchEffect(() => {
  if (props.option) {
    // 初始化 chart
    init();
  }
});
</script>
