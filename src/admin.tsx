import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import NavLeft from "../src/components/NavLeft";
import "./style/Layout.less";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import routes from "../src/config/routerConfig";
import { RouteComponentProps } from "react-router-dom";
// import IRouter from "./router/router";
export interface AdminProps extends RouteComponentProps {}
const Admin: React.FC<AdminProps> = ({ history, location, match }) => {
  return (
    <Row className="container">
      <Col span={3} className="navLeft">
        <NavLeft />
      </Col>
      <Col span={21} className="main">
        <Header history={history} location={location} match={match} />
        <Row className="content">
          <Router>
            <Switch>
              {routes.map(item => {
                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                    exact
                  ></Route>
                );
              })}
              <Redirect to="/404" />
            </Switch>
          </Router>
        </Row>
        <Footer />
      </Col>
    </Row>
  );
};

export default Admin;
