import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
const BaseRoute = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Layout}></Route>
      </Switch>
    </HashRouter>
  );
};

export default BaseRoute;
