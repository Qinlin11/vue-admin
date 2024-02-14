<!-- MenuItems.vue -->
<template>
  <a-sub-menu :key="String(menuItems.path)">
      <template #icon>
        <Icon
            class="mt-[2px]"
            :icon="menuItems.meta?.icon"
            :style="{ fontSize: '16px' }"
          />
      </template>
      <template #title>{{ menuItems.meta?.title }}</template>
      <template v-for="item in menuItems.children" :key="String(item.path)">
        <template v-if="!item.children">
          <a-menu-item :key="String(item.path)">
            <router-link :to="item.path">{{ item.meta?.title }}</router-link>
          </a-menu-item>
        </template>
        <template v-else>
          <MenuItems :menu-info="item" :key="String(item.path)" />
        </template>
      </template>
    </a-sub-menu>
</template>
  
<script setup lang="ts">
import { Icon } from '@iconify/vue';
const { menuItems } = defineProps(['menuItems']);
</script>
  
<style scoped>
/* 样式 */
</style>
  