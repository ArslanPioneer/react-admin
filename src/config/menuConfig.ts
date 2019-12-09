const menuList = [
  {
    title: "首页",
    key: "/home",
    icon: "home"
  },
  {
    title: "UI",
    key: "/home/ui",
    icon: "smile",
    children: [
      {
        title: "按钮",
        key: "/home/ui/buttons"
      },

      {
        title: "Loading",
        key: "/home/ui/loading"
      }
    ]
  },
  {
    title: "Todo",
    key: "/home/todoList",
    icon: "edit"
  },
  {
    title: "table",
    key: "/home/table"
  }
];
export default menuList;
