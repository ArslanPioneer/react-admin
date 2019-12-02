import React, { useState, useEffect } from "react";
import { Menu, Icon, Button } from "antd";
import menuList from "../../config/menuConfig";
const { SubMenu } = Menu;

const NavLeft: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuData, setMenuData] = useState(menuList);

  //菜单渲染
  const renderMenu = (data: any) => {
    return data.map((item: any) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                {item.title}
              </span>
            }
          >
            {renderMenu(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Menu.Item>
        );
      }
    });
  };
  useEffect(() => {
    console.log(menuList);
  });

  return (
    <div>
      <Menu mode="inline" theme="dark" inlineCollapsed={collapsed}>
        {renderMenu(menuData)}
      </Menu>
    </div>
  );
};

export default NavLeft;
