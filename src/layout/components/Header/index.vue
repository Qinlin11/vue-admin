<template>
    <div>
        <div class="flex w-full bg-white justify-between h-12">
            <div class="flex  items-center">
                <div class="h-full flex items-center cursor-pointer pt-1 px-2.5 pb-0" @click="toggleCollapsed">
                    <MenuUnfoldOutlined v-if="isCollapse" class="text-base" />
                    <MenuFoldOutlined v-else class="text-base" />
                </div>
                <Breadcrumb />
            </div>
            <div class="flex  items-center justify-around">
                <Fullscreen class="mr-[5px]"/>

                <Dropdown class="min-w-50 mr-[5px]">
                    <div class="flex items-center cursor-pointer" @click.prevent>
                        <img class=" bg-light-500 rounded-full" :src="Avatar" :width="27"
                            :height="27" alt="头像">
                        <span class="ml-2 text-[15px] min-w-[50px]">south-admin</span>
                    </div>

                    <template #overlay>
                        <a-menu>
                            <a-menu-item>
                                <FormOutlined class="mr-1" />
                                <span>修改密码</span>
                            </a-menu-item>
                            <a-menu-item>
                                <LogoutOutlined class="mr-1" />
                                <span>退出登录</span>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </Dropdown>
            </div>
        </div>
        <div class=" ml-2 h-[22px] bg-[#f5f5f5] flex items-center">
            <pageTag></pageTag>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    Dropdown,
} from 'ant-design-vue';

import Avatar from '@/assets/images/avatar.png';
import { MenuUnfoldOutlined, MenuFoldOutlined, FormOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import Fullscreen from './Fullscreen.vue';
import Breadcrumb from './Breadcrumb.vue';
import pageTag from './pageTag.vue';
import {useRouteStore} from "@/stores/routerStore";


const routeStore = useRouteStore();
const isCollapse = computed(() => routeStore.isCollapse);
const toggleCollapsed = () => {
    routeStore.showCollapse()
};

</script>

