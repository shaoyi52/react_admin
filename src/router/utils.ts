import routes from './config.tsx'

/**
 * 将路由转换为一维数组
 * @param routeList 路由
 * @param deep 是否深层转化
 * @param auth 路由是否需要检查授权, 路由配置的auth优先级比这里高
 */

export function flattenRoute(routeList,deep,auth){
    const result= [];

  for (let i = 0; i < routeList.length; i += 1) {
    const route = routeList[i];

    result.push({
      ...route,
      auth: typeof route.auth !== 'undefined' ? route.auth : auth,
    });

    if (route.children && deep) {
      result.push(...flattenRoute(route.children, deep, auth));
    }
  }

  return result;
}

function getBusinessRouteList(){
    const routeList = routes.filter(route => route.path === '/');
  
    if (routeList.length > 0) {
      return flattenRoute(routeList, true, true);
    }
    return [];
  }

export const businessRouteList = getBusinessRouteList();