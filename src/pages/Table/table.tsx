import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { GETUSERList } from "../../api/login";

const UserList: React.FC = () => {
  const [userList, setUserList] = useState([]);
  const column = [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "昵称",
      dataIndex: "nickname",
      key: "nickname",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
  ];

  useEffect(() => {
    let params = {
      page: "1",
      size: "10",
    };

    GETUSERList(params).then((res) => {
      console.log(res);
      setUserList(res.userList);
    });
  }, []);
  return <Table columns={column} dataSource={userList} />;
};

export default UserList;
