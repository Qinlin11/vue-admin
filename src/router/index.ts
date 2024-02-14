import { createRouter, createWebHashHistory } from 'vue-router';
// @ts-ignore
import { setupLayouts } from 'virtual:generated-layouts';
// import generatedRoutes from 'virtual:generated-pages';

import type { RouteRecordRaw } from 'vue-router'
import generatedRoutes from '~pages'


// 对生成的路由进行扩展，添加重定向
const extendedRoutes: RouteRecordRaw[] = generatedRoutes.map((route): RouteRecordRaw => {
  if (route.path === '/dashboard') {    
    return Object.assign({}, route, {
      redirect: '/dashboard/analysis' as string,
      // children: () => [], // 添加一个虚拟的 children 属性
    });
  }
  return route as RouteRecordRaw;
})



// 添加根路由的重定向
extendedRoutes.unshift({
  path: '/',
  redirect: '/dashboard',
});


const routes = setupLayouts(extendedRoutes);




const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;
