<script setup lang="ts">
import Menu from "@/layout/components/Menu/index.vue";
import Header from "@/layout/components/Header/index.vue"
import { useRouteStore } from "@/stores/routerStore";

const routeStore = useRouteStore();

const isCollapse = computed(() => routeStore.isCollapse);
</script>

<template>
    <a-layout class="absolute inset-0 flex flex-col h-screen min-h-screen">
        <a-layout-sider v-model:collapsed="isCollapse" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }">
            <Menu />
        </a-layout-sider>

        <a-layout class="flex flex-col h-full z-100">
            <!-- Header -->
            <a-layout-header class="transition-all duration-300 bg-transparent ps-0 pe-0 z-100" :class="!isCollapse ? 'ml-[200px]' : 'ml-[82px]'"
                style="background-color: transparent; padding-inline: 0; z-index:100"
                :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
                <Header z-100 />
            </a-layout-header>

            <a-layout-content class="flex-1 transition-all duration-300 mt-16" :class="!isCollapse ? 'ml-[200px]' : 'ml-[82px]'">
                <router-view />
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<style scoped></style>
