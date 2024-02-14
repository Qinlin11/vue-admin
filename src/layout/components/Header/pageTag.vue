<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useRouteStore } from '@/stores/routerStore'
import { computed, onMounted, watch } from 'vue'
import { Tag } from 'ant-design-vue';
const router = useRouter()
const route = useRoute()
const routeStore = useRouteStore()




const activeIndex = computed({
    get: () => routeStore.activeIndex,
    set: (val) => routeStore.set_active_index(val),
})
const openTab = computed(() => routeStore.openTab)
const tabClick = (item: { route: string; }): void => {
    router.push({ path: item.route })
}

const tabRemove = (targetName: string) => {
    if (targetName == '/' || targetName == '') {
        return
    }
    routeStore.delete_tabs(targetName)
    if (activeIndex.value === targetName) {
        // 设置当前激活的路由
        if (openTab.value && openTab.value.length >= 1) {
            routeStore.set_active_index(openTab.value[openTab.value.length - 1].route)
            router.push({ path: activeIndex.value })
        } else {
            router.push({ path: '/' })
        }
    }
}
onMounted(() => {
    // 页面刷新时以当前路由做为tab加入tabs
    // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
    // 当当前路由是首页时，添加首页到store，并设置激活状态
    if (route.path !== '/' && route.path !== '/dashboard/analysis') {
        // this.$store.commit('add_tabs', {route: '/centerTarget' , name: '首页'});
        // this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
        routeStore.set_active_index(route.path)
    } else {
        routeStore.delete_tabs('')

        routeStore.set_active_index('/dashboard/analysis')
        router.push('/dashboard/analysis')
    }
    

})

watch(
    () => route,
    (to, _) => {
        
        let flag = false
        for (let item of openTab.value) {
            if (item.name === to.name) {
                routeStore.set_active_index(to.path)
                

                flag = true
                break
            }
        }
        if (!flag) {
            routeStore.add_tabs({ route: to.path, name: to.name!, title: to.meta.title as string })
            routeStore.set_active_index(to.path)
        }
    },
    { deep: true, immediate: true },
)
const isActiveTab = (route: string) => {
    return activeIndex.value === route
}
</script>

<template>
    <Tag class="cursor-pointer" :class="{ active: isActiveTab(item.route) }" v-model="activeIndex" v-for="item in openTab" :key="item.name"
        closable @click="tabClick(item)" @close="tabRemove(item.route)">
        {{ item.title }}</Tag>
</template>

<style scoped>
.active {
    background-color: #5ddab4 !important;
    color: #ffffff !important;
}
</style>
