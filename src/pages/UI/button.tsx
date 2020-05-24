import React from "react";
import { Button, Row, Col, Card } from "antd";
import CustomBreadcrumb from "../../components/BreadCumb";
import "../../style/common.less";
const Buttons: React.FC = () => {
  return (
    <div>
      <CustomBreadcrumb Title={["UI", "Buttons"]} />
      <Row className="basicRow">
        <Col span={24}>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <Button type="ghost">ghost</Button>
        </Col>
      </Row>
      <Row className="basicRow">
        <Col span={24}>
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" shape="circle">
            A
          </Button>
          <Button type="primary" icon="search">
            Search
          </Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>

          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
          <Button type="dashed" shape="circle" icon="search" />
          <Button type="dashed" icon="search">
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Buttons;
