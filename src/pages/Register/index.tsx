import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button, message, Row, Col, Tooltip } from "antd";
import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "react-router-dom";
import "./Register.less";
import { REGISTER } from "../../api/login";
export interface RegisterProps
  extends FormComponentProps,
    RouteComponentProps {}
const Register: React.FC<RegisterProps> = ({ form, history }) => {
  const [confirmDirty, setConfirmDirty] = useState(false);
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  const compareToFirstPassword = (rule: any, value: any, callback: any) => {
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule: any, value: any, callback: any) => {
    if (value && confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    form.validateFields((err, value) => {
      if (!err) {
        let params = {
          email: value.email,
          nickname: value.nickname,
          password1: value.password,
          password2: value.confirm,
        };
        REGISTER(params)
          .then((res) => {
            console.log(res);
            if (res.error_code === 0) {
              message.success(res.msg);
              history.push("/Login");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className="register-container">
      <Form
        {...formItemLayout}
        onSubmit={handleSubmit}
        className="form-container"
      >
        <Form.Item label="E-mail">
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!",
              },
              {
                validator: validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!",
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Nickname&nbsp;
              <Tooltip title="What do you want others to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ],
          })(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const RegisterComponent = Form.create()(Register);

export default RegisterComponent;
