<template>
    <div class="flex items-center h-full px-2">
        <a-breadcrumb   class="flex items-center h-5.5">
            <a-breadcrumb-item><router-link to="/">首页</router-link>></a-breadcrumb-item>
            <a-breadcrumb-item v-for="route in routers" :key="route.path">
                <router-link :to="route.path">{{ route.meta.title }}</router-link>
            </a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

//获取当前页面路由
const currentRoute = useRouter()
const routers = computed(() => {
  // 过滤掉没有meta的
  return currentRoute.currentRoute.value.matched.filter((item) => item.meta.title && item.name)
})





//获取当前页面的根路由
</script>

<style scoped></style>