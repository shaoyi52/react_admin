import React from "react";
import { Menu, Icon, Breadcrumb, Select } from "antd";
import { Link } from "react-router-dom";

const Option = Select.Option;

//获取侧边栏Item
export const getMenuItem = (list) => {
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
};
