<template>
  <BasicContent :isPermission="true">
    <div class="flex">
      <div class="w-7/10 w-full mr-4 enter-y">
        <ProjectCard :loading="loading" class="enter-y" />
        <DynamicInfo :loading="loading" class="my-4 enter-y" />
      </div>
      <div class="w-3/10 w-full enter-y">
        <QuickNav :loading="loading" class="enter-y" />

       
        <SaleRadar class="enter-y" />
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
      "title": "Dashboard",
      icon: 'ion:grid-outline',
    }
}
</route>
