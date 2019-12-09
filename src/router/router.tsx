import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom";

import Admin from "../admin";
import NotFound404 from "../pages/others/404";
const IRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Admin}></Route>

        <Route path="/404" component={NotFound404}></Route>
      </Switch>
    </Router>
  );
};

export default IRouter;
