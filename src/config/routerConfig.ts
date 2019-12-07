import Home from "../pages/Home";
import Button from "../pages/UI/button";
import Loading from "../pages/UI/loading";

const routes = [
  { path: "/home", component: Home },
  { path: "/home/ui/buttons", component: Button },
  { path: "/home/ui/loading", component: Loading }
];

export default routes;
