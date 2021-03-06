import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  Redirect,
  Route,
  Router,
  Switch,
  hashHistory,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux"; // 利用Provider可以使我们的 store 能为下面的组件所用
import { createStore } from "redux";
//import pageMainReducer from "./stores/reducer";
//import todoApp from "./toDoStores";
//import routerStore from "./routerStore/reducer";
import rootStore from "./redux/reducers";
import routes from "./Router";
import renderRoutes from "./utils/renderRoutes";
let store = createStore(rootStore); //
//import finalCreateStore from './src/store/configureStore'  //引入store配置

/* ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
); */
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      {renderRoutes(routes)}
      <Route path="/" exact render={() => <Redirect to="/login" />} />
      {/* <Switch>{renderRoutes(routes)}</Switch> */}
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
