import React from "react";
import Footer from "./Footer";
import AddTodo from "../pages/ToDoPage/component/AddTodo";
import VisibleTodoList from "../pages/ToDoPage/component/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
