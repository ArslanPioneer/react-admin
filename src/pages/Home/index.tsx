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
      <Row className="home" gutter={24}>
        <Col span={4} className="card">
          笔
        </Col>
        <Col span={4} className="card">
          下
        </Col>
        <Col span={4} className="card">
          纵
        </Col>
        <Col span={4} className="card">
          横
        </Col>
        <Col span={4} className="card">
          气
        </Col>
      </Row>
    </>
  );
};

export default Home;
