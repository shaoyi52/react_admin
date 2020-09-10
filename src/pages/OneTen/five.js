import React, { createContext, Component } from "react";
import { Button } from "antd";
/**
 * 跨级组件通信
 * 1.使用Props 的一层层往下传
 * 2.使用context,context相当于一个大容器，我们可以把要通信的内容放在这个容器中，
 * 无伦嵌套多深都可以随时取，对于跨越多层全局数据可以使用Context实现
 */
const BatteryContext = createContext();

class GrandChild extends Component {
  render() {
    return (
      <BatteryContext.Consumer>
        {(color) => (
          <h1 style={{ color: color }}>
            context 获取祖父组件颜色(这是content传值应用)
          </h1>
        )}
      </BatteryContext.Consumer>
    );
  }
}

class Child extends Component {
  render() {
    return <GrandChild></GrandChild>;
  }
}

export default class Parent extends React.Component {
  state = {
    color: "red",
  };
  render() {
    const { color } = this.state;
    return (
      <BatteryContext.Provider value={color}>
        <Child></Child>
      </BatteryContext.Provider>
    );
  }
}
