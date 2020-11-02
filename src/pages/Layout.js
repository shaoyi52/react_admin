import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import NotFound from "./NotFound";
import { getMenuItem, getBreadItem, filterRoutes } from "../utils";
import * as action from "../routerStore/actionCreator";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const mapStateToProps = (state, ownProps) => {
  return {
    state: { ...state },
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    permissionAction: (path) => {
      dispatch(action.permissionAction(path));
    },
  };
};

class LayoutPage extends React.Component {
  state = {
    collapsed: false,
  };
  componentDidMount() {
    const path = this.props.location.pathname;
    this.props.permissionAction(path);
  }
  handleClick = (e) => {
    console.log("click ", e);
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    console.log(this.props);

    const path = this.props.location.pathname;
    const { permissionList } = this.props.state;
    const defaultOpenKeys = filterRoutes(path);

    return (
      <Layout className="layoutWrap">
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[2]}>
            {getMenuItem(permissionList)}
          </Menu>
        </Sider>
        <Layout>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            >
              Header
            </Header>
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Switch>
                  {permissionList.map((value, key) => {
                    return (
                      <Route
                        routes={value}
                        key={key}
                        exact={value.exact ? true : false}
                        path={value.path}
                        component={value.component}
                        list={this.state.list}
                      />
                    );
                  })}
                  <Route path="/notfound" component={NotFound} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutPage);
