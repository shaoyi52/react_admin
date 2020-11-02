import React, { Component, Fragment } from "react";
import { Button } from "antd";

//父组件
export default class onRefTestComponent extends Component {
  constructor(props) {
    super(props);
    this.child2 = "";
  }
  testRef = (ref) => {
    this.child = ref;
    console.log(ref);
  };
  // onRef 函数回调获取
  handleClick = () => {
    alert(this.child.state.info);
  };
  // onRef 函数回调获取
  getChild2Info = () => {
    alert(this.child2.state.info);
  };

  //refs
  getChild3Info = () => {
    let child3 = this.refs["child3"];
    console.log("refs:", this.refs);
    alert(child3.state.info);
  };
  render() {
    return (
      <Fragment>
        <h1>方式一</h1>
        <div>组件间通信之onRef方法 props回调子组件this实例</div>
        <Child onRef={this.testRef}></Child>

        <button onClick={this.handleClick}>父组件按钮</button>
        <h1>方式二</h1>
        <div>{"(ref) => {this.child2 = ref}"}</div>
        <Child2
          onRef={(ref) => {
            this.child2 = ref;
          }}
        ></Child2>
        <button onClick={this.getChild2Info}>父组件按钮2</button>
        <h1>方式三</h1>
        <div>this.refs</div>
        <Child3 ref="child3"></Child3>
        <button onClick={this.getChild3Info}>父组件按钮2</button>

        <h1>方式四</h1>
        <div>React.createRef</div>
        <Child4 />
      </Fragment>
    );
  }
}

//子组件
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "快点击子组件按钮",
    };
  }
  componentDidMount() {
    this.props.onRef(this);
    console.log(this);
  }

  handleChildClick = () => {
    this.setState({ info: "通过父组件按钮获取到子组件信息" });
  };

  render() {
    return <Button onClick={this.handleChildClick}>子组件按钮</Button>;
  }
}

//子组件2
class Child2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "我是子组件二",
    };
  }
  componentDidMount() {
    this.props.onRef(this);
  }

  render() {
    let { info } = this.state;
    return <div>子组件二内容：{info}</div>;
  }
}

//子组件3
class Child3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "我是子组件三",
    };
  }

  render() {
    let { info } = this.state;
    return <div>子组件三内容：{info}</div>;
  }
}

//组件4
class Child4 extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      info: "my test Info",
    };
  }
  handleClick = () => {
    alert(this.myRef.current.value);
  };
  inputEvent = (e) => {
    this.setState({ info: e.target.value });
  };
  render() {
    let { info } = this.state;
    return (
      <Fragment>
        <input ref={this.myRef} value={info} onChange={this.inputEvent} />
        <Button onClick={this.handleClick}>获取input实例的info</Button>
      </Fragment>
    );
  }
}
