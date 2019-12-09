import React, { useState } from "react";
import { Row, Col, Avatar, Menu, Dropdown, Icon } from "antd";
import "./header.less";
const Header: React.FC = () => {
  const [userName, setUsername] = useState("Arslan");
  const Title = `Hello,${userName}`;
  const menu = (
    <Menu>
      <Menu.ItemGroup title={Title}>
        <Menu.Item key="setting:1">退出登录</Menu.Item>
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
