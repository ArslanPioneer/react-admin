import React, { useState, useEffect } from "react";
import { Menu, Icon, Button } from "antd";
import { NavLink, RouteComponentProps } from "react-router-dom";
import menuList from "../../config/menuConfig";
const { SubMenu } = Menu;

const NavLeft: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [menuData, setMenuData] = useState(menuList);
  const [openKeys, setOpenKeys] = useState("");
  useEffect(() => {});
  const clickMenu = (e: any) => {
    console.log(e);
    setOpenKeys(e.key);
  };
  const openChange = () => {
    console.log(openKeys);
    if (openKeys.length === 0 || openKeys.length === 1) {
      setOpenKeys(openKeys);
      return;
    }
    // if (openKeys.length > 1) {
    //   // 最新展开的 SubMenu
    //   const latestOpenKey = openKeys[openKeys.length - 1];

    //   // 这里与定义的路由规则有关
    //   if (latestOpenKey.includes(openKeys[0])) {
    //     setOpenKeys(openKeys);
    //   } else {
    //     setOpenKeys(openKeys);
    //   }
    // }
  };
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
            <NavLink to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </NavLink>
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
      <Menu
        mode="inline"
        theme="dark"
        // onClick={clickMenu}
        // openKeys={[openKeys]}
        // onOpenChange={openChange}
      >
        {renderMenu(menuData)}
      </Menu>
    </div>
  );
};

export default NavLeft;
