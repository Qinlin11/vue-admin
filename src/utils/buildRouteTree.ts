import type { RouteRecordRaw } from 'vue-router'
  
// 修改 buildRouteTree 函数
export const buildRouteTree = (routes: RouteRecordRaw[]) => {
  const routeMap: Record<string, RouteRecordRaw> = {};

  // 将路由按照 path 映射到 routeMap
  routes.forEach(route => {
    routeMap[route.path] = route;
  });

  // 遍历路由，为每个路由添加 children 属性
  routes.forEach(route => {
    const parentPath = route.path.split('/').slice(0, -1).join('/');
    const parentRoute = routeMap[parentPath];

    if (parentRoute) {
      // 父路由存在，将当前路由添加到父路由的 children 中
      if (!parentRoute.children) {
        parentRoute.children = [];
      }
      parentRoute.children.push(route);

      // 移除最后子路由的 children 属性
      if (route.children && route.children.length > 0) {
        // route.children = [];
        //删除children属性
        delete route.children;
      }
    }
  });

  // 返回顶层的父路由
  return routes.filter(route => !routeMap[route.path.split('/').slice(0, -1).join('/')]).reverse();
}
