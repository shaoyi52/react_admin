import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/NotFound";

const mapStateToProps = (state, ownProps) => {
  return {
    state: { ...state.router },
  };
};

class SecondLevelComponent extends React.Component {
  render() {
    const permissionList = this.props.state.permissionList;
    const path = this.props.match.path;
    const currentList = permissionList.filter((item) => {
      return item.path === path;
    });
    let list = [];
    if (currentList.length > 0 && currentList[0].children) {
      list = currentList[0].children.map((item, index) => {
        return (
          <Route
            routes={item.path}
            key={index}
            // exact
            path={item.path}
            component={item.component}
          />
        );
      });
      return (
        <Switch>
          {list}
          <Route component={NotFound} />
        </Switch>
      );
    } else {
      return <div>...</div>;
    }
  }
}

export default connect(mapStateToProps)(SecondLevelComponent);
