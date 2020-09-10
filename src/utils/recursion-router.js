/**
 *
 * @param {Array} userRouter  后台返回的用户权限json
 * @param {Array} allRouter  前端配置好的所有动态路由集合
 * @return {Array} realRoutes 过滤后的路由
 */

//根据后台数据筛选出路由表
export function recursionRouter(userRouter = [], allRouter = []) {
  const realRoutes = allRouter
    .filter((item) => {
      return userRouter.includes(item.pathName);
    })
    .map((item) => ({
      ...item,
      children: item.children
        ? recursionRouter(userRouter, item.children)
        : null,
    }));
  return realRoutes;
}

/**
 *
 * @param {Array} userRouter
 * @param {Array} allRouter
 * @return {Array} realRoutes
 */

//重定向到children的第一个路由
export function recursionRouterTwo(userRouter = [], allRouter = []) {
  const realRoutes = allRouter
    .filter((item) => {
      return userRouter.includes(item.path);
    })
    .map((item) => {
      return {
        ...item,
        redirect: item.children ? item.children[0].path : null,
        children: item.children
          ? recursionRouterTwo(userRouter, item.children)
          : null,
      };
    });
  return realRoutes;
}

/**
 *
 * @param {Array} userRouter
 * @param {Array} allRouter
 */
export function recursionRouterThree(userRouter = [], allRouter = []) {
  let list = [];
  allRouter.forEach((item, index) => {
    if (item.path === userRouter[0]) {
      list.push(item);
    }
  });
  return list;
}
