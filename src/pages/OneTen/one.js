import React from "react";

class OneChild extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default class One extends React.Component {
  render() {
    return (
      <div>
        <OneChild name={"这是React.PureComponent的使用方法"}></OneChild>
      </div>
    );
  }
}
