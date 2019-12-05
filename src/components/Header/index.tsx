import React, { useState } from "react";
import { Row, Col } from "antd";
import "./header.less";
const Header: React.FC = () => {
  const [userName, setUsername] = useState("Arslan");
  return (
    <div className="header">
      <Row className="headerTop">
        <Col span={24}>
          <span className="name">欢迎,{userName}</span>
          <span className="exit">退出</span>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
