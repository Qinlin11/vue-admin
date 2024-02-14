<template>
  <BasicContent :isPermission="true">
    <div class="flex">
      <div class="lg:w-[80%] w-full !mr-4">
        <ProjectCard :loading="loading"  />
        <DynamicInfo :loading="loading" class="my-4" />
      </div>
      <div class="">
        <QuickNav :loading="loading"  />

        <SaleRadar class=" my-4" />
      </div>
    </div>
  </BasicContent>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import BasicContent from '@/components/Content/BasicContent.vue';
  import ProjectCard from './components/ProjectCard.vue';
  import QuickNav from './components/QuickNav.vue';
  import DynamicInfo from './components/DynamicInfo.vue';
  import SaleRadar from './components/SaleRadar.vue';

  const loading = ref(true);

  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>


<route>
{
    "meta": {
      "title": "工作台",
      "requiresAuth": true
    }
}
</route>
