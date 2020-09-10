import React, { Component, Fragment } from "react";
import { Button } from "antd";
import EventEmitters from "./EventEmitter";
/**
 * 兄弟组件通信（发布订阅）
 */
const EventEmitter = new EventEmitters();
class ChildrenA extends Component {
  upDate() {
    EventEmitter.emit("dataChange");
  }
  render() {
    return (
      <Fragment>
        <h1>ChildrenA Part</h1>
        <Button onClick={() => this.upDate()}>发布</Button>
      </Fragment>
    );
  }
}

class ChildrenB extends Component {
  state = { count: 0 };
  componentDidMount() {
    const listenner = EventEmitter.on("dataChange", this.dataChange);
  }
  dataChange = () => {
    let count = this.state.count;
    console.log("count:", count);
    this.setState({ count: count + 1 });
    //this.setState(({ count }) => ({ count: count + 2 }));
  };

  render() {
    let { count } = this.state;
    return (
      <Fragment>
        <h1>ChildrenB count:{count}</h1>
      </Fragment>
    );
  }
}

export default class Parent extends React.Component {
  render() {
    return (
      <Fragment>
        <ChildrenA></ChildrenA>
        <ChildrenB></ChildrenB>
      </Fragment>
    );
  }
}
