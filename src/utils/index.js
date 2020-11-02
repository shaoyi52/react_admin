import fetch from "./fetch";
import React from "react";
import { Menu, Icon, Breadcrumb, Select } from "antd";
import { Link } from "react-router-dom";

const Option = Select.Option;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;
//获取侧边栏Item
export function getMenuItem(list) {
  return list.map((item, index) => {
    if (item.children && item.children.length > 0) {
      return (
        <SubMenu
          key={item.path}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }
        >
          {getMenuItem(item.children)}
        </SubMenu>
      );
    } else {
      return (
        <MenuItem key={item.path}>
          <Link to={item.path}>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Link>
        </MenuItem>
      );
    }
  });
}

export function filterRoutes(pathName) {
  const pathSnippets = pathName.split("/").filter((path) => path);
  let paths = pathSnippets.map(
    (path, index) => `/${pathSnippets.slice(0, index + 1).join("/")}`
  );
  paths.splice(0, 1);
  return paths;
}
export default { fetch, getMenuItem, filterRoutes };
