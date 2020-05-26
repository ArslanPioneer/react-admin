import React from "react";
import { Form, Icon, Input, Button, message } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "react-router-dom";
import "./Login.less";
import { LOGIN } from "../../api/login";
export interface LoginProps extends FormComponentProps, RouteComponentProps {}
const Login: React.FC<LoginProps> = ({ form, history }) => {
  const { getFieldDecorator } = form;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    LOGIN()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    form.validateFields((err, value) => {
      if (!err) {
        history.push("/home");
        message.success("登录成功");
      }
    });
  };
  return (
    <div className="loginContainer">
      <Form className="loginForm" onSubmit={handleSubmit}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "用户名" }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户名"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "密码" }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
            />
          )}
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
      </Form>
    </div>
  );
};

const LoginComponent = Form.create()(Login);

export default LoginComponent;
