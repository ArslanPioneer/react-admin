import React, { useState } from "react";
import { Row, Col, Avatar, Menu, Dropdown, message } from "antd";
import { RouteComponentProps } from "react-router-dom";
import "./header.less";
export interface HeaderProps extends RouteComponentProps {}

const Header: React.FC<HeaderProps> = ({ history }) => {
  const [userName, setUsername] = useState("Arslan");
  const Title = `Hello,${userName}`;
  const exitHome = () => {
    history.push("/login");
    message.success("退出成功");
  };
  const menu = (
    <Menu>
      <Menu.ItemGroup title={Title}>
        <Menu.Item>
          <span onClick={exitHome}>退出登录</span>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
  return (
    <div className="header">
      <Row className="headerTop">
        <Col span={24}>
          <Dropdown overlay={menu} className="avatar">
            <Avatar src="https://thumbs.dreamstime.com/b/sticker-cartoon-biscuit-creative-illustrated-149222926.jpg" />
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
