<template>
    <BasicContent :isPermission="true">
      <Spin :spinning="isLoading">
      <div class='pb-[10px]'>
        <Block />
      </div>

      <div className='flex justify-between'>
        <Line />
        <Bar />
      </div>
    </Spin>
    </BasicContent>
    
</template>


<script setup lang="ts">

import { Spin } from 'ant-design-vue';
import Line from "./components/Line.vue";
import Bar from "./components/Bar.vue";
import Block from "./components/Block.vue";
import BasicContent from '@/components/Content/BasicContent.vue';
const isLoading = ref(false);


</script>


<style scoped>

</style>

<route>
{
      "meta": {
      "title": "分析页",
      
      }
}
</route>
