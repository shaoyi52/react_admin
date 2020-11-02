import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import "./index.css";
class NormalLoginForm extends React.Component {
  onFinish = (values) => {
    console.log("Success:", values);
    this.props.history.push("/layout");
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  handleSubmit = (values) => {
    console.log(values);
  };
  render() {
    return (
      <div className="flex_center wrapper_login">
        <Form
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          className="login-form login-form-login"
        >
          <div className="login-title">后台管理系统</div>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your userName!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
          <Form.Item>
            <div className="loginTip">登录密码为任意值</div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default NormalLoginForm;
