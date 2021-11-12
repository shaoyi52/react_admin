/*
 * @Author: yuzhoufen
 * @Date: 2021-08-17 17:08:45
 * @LastEditors: yuzhoufen
 * @LastEditTime: 2021-11-01 11:23:13
 * @Description: Do not edit
 * @FilePath: \my-app\src\App.js
 */
import React,{Suspense} from "react";
import { Spin } from "antd";
import {
    HashRouter,
    Redirect,
    Route, 
  } from "react-router-dom";


//import routes from "./Router";
import routes from "./router/config.tsx";
import renderRoutes from "./utils/renderRoutes";

import "./styles/index.css";
function App(){
    return(
    <Suspense fallback={<Spin size="large" className="layout__loading" />}>
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
    </Suspense>
    )
}

export default App