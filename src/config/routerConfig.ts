import Home from "../pages/Home/index";
import Button from "../pages/UI/button";
import Loading from "../pages/UI/loading";
import TodoList from "../pages/TodoList";
import Table from "../pages/Table/table";

const routes = [
  { path: "/home", component: Home },
  { path: "/home/ui/buttons", component: Button },
  { path: "/home/ui/loading", component: Loading },
  { path: "/home/todoList", component: TodoList },
  { path: "/home/table", component: Table }
];

export default routes;
