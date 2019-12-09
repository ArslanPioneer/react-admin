import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
export interface CustomBreadcrubProps {
  Title?: string[];
}
const CustomBreadcrumb: React.FC<CustomBreadcrubProps> = Title => {
  const titleArray = Title.Title;
  return !!titleArray ? (
    <div style={{ marginBottom: "10px" }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/home">Home</Link>
        </Breadcrumb.Item>
        {titleArray.map(Item => {
          return <Breadcrumb.Item key={Item}>{Item}</Breadcrumb.Item>;
        })}
      </Breadcrumb>
    </div>
  ) : null;
};

export default CustomBreadcrumb;
