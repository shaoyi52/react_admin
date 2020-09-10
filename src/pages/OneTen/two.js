import React from "react";
import { Button } from "antd";
export default class Two extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      name: "",
    };
    this.bindClick = this.bindClick.bind(this);
  }

  click() {
    let inputStr = this.inputRef.current.value;
    this.setState({
      name: inputStr,
    });
  }
  bindClick() {
    let inputStr = this.inputRef.current.value;
    this.setState({
      name: inputStr,
    });
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="name">Enter Text here </label>
        <input type="text" id="name" ref={this.inputRef} />
        <div>
          <Button type="primary" onClick={this.click.bind(this)}>
            行内 bind点击事件
          </Button>
          <Button onClick={() => this.click()}>箭头函数点击事件</Button>
          <Button onClick={this.bindClick}>bind点击事件</Button>
        </div>
        <h3>点击取输入框内容：{this.state.name || "暂无内容"}</h3>
      </React.Fragment>
    );
  }
}
