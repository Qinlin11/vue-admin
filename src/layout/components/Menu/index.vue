<template>
  <a-menu :default-selected-keys="['1']" :default-open-keys="['2']" mode="inline" theme="dark" >
    <template v-for="menu in menuTree" :key="String(menu.path)">
      <template v-if="!menu.children">
        <a-menu-item :key="String(menu.path)">
          <router-link :to="menu.path">{{ menu.meta?.title }}</router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <MenuItems :menuItems="menu" :key="String(menu.path)" />
      </template>
    </template>
  </a-menu>
</template>
  
<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import MenuItems from './MenuItems.vue';

import router from '@/router';
import { buildRouteTree } from '@/utils/buildRouteTree';


const route = useRoute();
const currentRouteName = ref(route.path); // 使用当前路由的 path 作为 selectedKey


//监视路由变化
watch(
  () => route.path,
  () => {
    currentRouteName.value = route.path;
  }
);
const routes = router.options.routes;

const routeData = routes.filter(route => route.path !== '/');
const menuTree = ref<RouteRecordRaw[]>([]);
menuTree.value = buildRouteTree(routeData);

//把menuTree里面的children反转并去除数
menuTree.value.forEach(item => {
  if (item.children) {
    item.children.reverse();
    item.children.pop();
  }
})
console.log('menuTree:', menuTree.value);


const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1'],
});

watch(() => state.openKeys, (_val, oldVal) => {
  state.preOpenKeys = oldVal;
});
</script>
  
<style scoped>
/* 样式 */
</style>
  