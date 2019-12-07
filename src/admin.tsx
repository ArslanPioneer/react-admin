import React, { Component } from "react";
import { Row, Col } from "antd";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import NavLeft from "../src/components/NavLeft";
import "./style/common.less";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from "../src/config/routerConfig";
// import IRouter from "./router/router";
class Admin extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={3} className="navLeft">
          <NavLeft />
        </Col>
        <Col span={21} className="main">
          <Header />
          <Row>
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
              </Switch>
            </Router>
          </Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}

export default Admin;
