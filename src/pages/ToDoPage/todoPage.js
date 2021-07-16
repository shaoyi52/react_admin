import React, { useState } from "react";
import VisibleToDoList from "./component/VisibleTodoList";
import AddToDo from "./component/AddTodo";
export default class todoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-header">ToDoList</div>
        <AddToDo />
        <VisibleToDoList />
      </React.Fragment>
    );
  }
}
