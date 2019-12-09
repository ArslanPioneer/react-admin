import React from "react";
import { Button, Row, Col, Spin } from "antd";
import CustomBreadcrumb from "../../components/BreadCumb";
import "../../style/common.less";
const Loading: React.FC = () => {
  return (
    <div>
      <CustomBreadcrumb Title={["UI", "Loading"]} />
      <Row className="basicRow">
        <Col span={24}>
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Col>
      </Row>
    </div>
  );
};

export default Loading;
