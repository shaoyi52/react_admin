import React,{Suspense} from "react";
import { Spin } from "antd";
import {
    HashRouter,
    Redirect,
    Route, 
  } from "react-router-dom";


import routes from "./Router";
import renderRoutes from "./utils/renderRoutes";

import "./styles/index.css";
function App(){
    return<Suspense fallback={<Spin size="large" className="layout__loading" />}>
        <HashRouter>
      {renderRoutes(routes)}
      <Route path="/login" exact render={() => <Redirect to="/login" />} />
    </HashRouter></Suspense> 
}

export default App