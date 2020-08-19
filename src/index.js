import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux"; // 利用Provider可以使我们的 store 能为下面的组件所用
import { createStore } from "redux";
import pageMainReducer from "./stores/reducer";
import todoApp from "./toDoStores";

let store = createStore(todoApp); //
//import finalCreateStore from './src/store/configureStore'  //引入store配置

/* ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
); */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
