import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          render={(props) => {
            return <route.component {...props} {...extraProps} />;
          }}
        />
      ))}
    </Switch>
  ) : null;

export default renderRoutes;
