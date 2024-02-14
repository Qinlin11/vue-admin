import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
//ant-design-vue
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers"

import Pages from 'vite-plugin-pages'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';
// @ts-ignore
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      dts: "src/auto-import.d.ts",
      //ant-design-vue
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      //ant-design-vue   importStyle = false 样式就没了
      resolvers: [AntDesignVueResolver({importStyle: false, resolveIcons: true,})],
    }),
    Pages({
      dirs: [{ dir: "src/views", baseRoute: "/" }],
      exclude: ['**/components/*.vue', '**/components/*.ts', '**/analysis/components/*.vue'],
      importMode: "async",
      routeBlockLang: 'json5',
    }),
    Layouts({
      layoutsDirs: 'src/layout',  // 布局文件存放目录
      defaultLayout: 'index',  // 默认布局，对应 src/layout/index.vue
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      
      // default
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['src/layout/**/*.vue'],
  },

})
