import React from "react";
import { Row, Col } from "antd";
import "./home.less";
const Home: React.FC = () => {
  return (
    <Row className="home">
      <Col span={24}>内容</Col>
    </Row>
  );
};

export default Home;
