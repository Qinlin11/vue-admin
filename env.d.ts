/// <reference types="vite/client" />
//注释：主要是加入下面这行，否则main.ts页面会报红
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
// declare module "*.vue" {
//     import { DefineComponent } from "vue"
//     const component: DefineComponent<{}, {}, any>
//     export default component
// }

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
  }