<template>
    <Tooltip placement="bottom">
        <template #title>{{ !isFullscreen ? '全屏' : '退出全屏' }}</template>
        <div class="flex items-center justify-center text-lg mr-10px cursor-pointer" @click="toggle">
            <FullscreenOutlined v-if="!isFullscreen" />
            <FullscreenExitOutlined v-else />
        </div>
    </Tooltip>
</template>
  
<script lang="ts" setup>
/**
 * @description: 全屏组件
 */

import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons-vue';
// @ts-ignore
import { useFullscreen } from '@vueuse/core';
import { Tooltip } from 'ant-design-vue';


const { isFullscreen, toggle } = useFullscreen();
</script>