import React from "react";
import { Row, Col } from "antd";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import NavLeft from "../src/components/NavLeft";
import "./style/common.less";

const Admin: React.FC = () => {
  return (
    <Row className="container">
      <Col span={3} className="navLeft">
        <NavLeft />
      </Col>
      <Col span={21} className="main">
        <Header />
        <Row>content</Row>
        <Footer />
      </Col>
    </Row>
  );
};

export default Admin;
