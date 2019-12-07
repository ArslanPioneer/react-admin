import React from "react";
import { Row, Col } from "antd";
import "./index.less";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Row>
        <Col span={24}>中后台生产管理系统@Arslan</Col>
      </Row>
    </div>
  );
};

export default Footer;
