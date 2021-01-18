import React from "react";
import { Row, Col } from "antd";
import "./home.less";
import CustomBreadcrumb from "../../components/BreadCumb";
const Home: React.FC = () => {
  return (
    <>
      <CustomBreadcrumb />
      <Row className="home" gutter={24}>
        <Col span={4} className="card">
          心
        </Col>
        <Col span={4} className="card">
          有
        </Col>
        <Col span={4} className="card">
          凌
        </Col>
        <Col span={4} className="card">
          云
        </Col>
        <Col span={4} className="card">
          意
        </Col>
      </Row>
    </>
  );
};

export default Home;
