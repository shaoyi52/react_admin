import { AUTH_CHANGE, PERMISSION_CHANGE, CURRENT_CHANGE } from "./actionTypes";
import routes from "../Router";
import { filterRoutes } from "../utils";
import {
  recursionRouter,
  recursionRouterThree,
} from "../utils/recursion-router";

export const authChangeAction = () => {
  return {
    type: AUTH_CHANGE,
  };
};

export const permissionAction = (path) => {
  const res = [
    "oneTen",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "demo",
    "tableList",
    "TodoList",
    "customerManage",
    "help",
  ];
  console.log("routes:", routes);
  const allList = routes[1].children;
  const permissionList = recursionRouter(res, allList);
  const defaultOpenKeys = filterRoutes(path);
  const currentList = recursionRouterThree(defaultOpenKeys, permissionList);

  return {
    type: PERMISSION_CHANGE,
    permissionList: permissionList,
    currentList: currentList,
  };
};

export const currentAction = (list) => {
  return {
    type: CURRENT_CHANGE,
    currentList: list,
  };
};
