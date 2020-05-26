import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Admin from "../admin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound404 from "../pages/others/404";
const IRouter: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/Login" />}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" component={Register}></Route>
        <Route path="/home" component={Admin}></Route>
        <Route path="/404" component={NotFound404}></Route>
      </Switch>
    </Router>
  );
};

export default IRouter;
