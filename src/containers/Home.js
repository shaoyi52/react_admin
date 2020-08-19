import React, { Component } from "react";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>这里显示的是Home页当前值</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps", state, ownProps);
  // state 是 {userList: [{id: 0, name: '王二'}]}
  return {
    user: state.bookList,
  };
};

const getbookList = (state) => {
  console.log("mapStateToProps", state);
  // state 是 {userList: [{id: 0, name: '王二'}]}
  return {
    user: state.bookList,
  };
};
const mapDispatchToProps = (dispath) => {
  console.log("mapDispatchToProps", dispath);
  return null;
};

export default connect(getbookList, mapDispatchToProps)(Home);
