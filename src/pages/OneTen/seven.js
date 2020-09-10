import React, { Component, Fragment } from "react";
import { Button } from "antd";

export default class ChildrenB extends Component {
  state = { count: 0 };
  //常规方法1
  stateChange1 = () => {
    let count = this.state.count;
    console.log("count:", count);
    this.setState({ count: count + 1 });
    //this.setState(({ count }) => ({ count: count + 2 }))
  };

  //方法2
  stateChange2 = () => {
    this.setState(({ count }) => ({ count: count + 2 }));
    //this.setState(({ count }) => ({ count: count + 2 }))
  };
  //方法3
  stateChange3 = () => {
    this.setState((state, props) => ({ count: state.count + 1 }));
    //this.setState(({ count }) => ({ count: count + 2 }))
  };
  //方法4
  stateChange4 = () => {
    let count = this.state.count;
    this.setState({ count: count + 1 }, () => {
      alert("改变值后触发");
    });
    //this.setState(({ count }) => ({ count: count + 2 }))
  };

  render() {
    let { count } = this.state;
    return (
      <Fragment>
        <h1>ChildrenB count:{count}</h1>
        <Button onClick={this.stateChange1}>stateChange1</Button>
        <Button onClick={this.stateChange2}>stateChange2</Button>
        <Button onClick={this.stateChange3}>stateChange3</Button>
        <Button onClick={this.stateChange4}>stateChange4</Button>
        <Button onClick={this.stateChange1}>stateChange5</Button>
      </Fragment>
    );
  }
}
