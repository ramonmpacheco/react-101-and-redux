import React from "react";
import {hashHistory, Redirect, Route, Router} from "react-router";
import Dashboard from "../dashboard/dashboard";
import PaymentCycle from "../paymentCycle/paymentCycle";

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Dashboard} />
    <Route path="/paymentCycle" component={PaymentCycle} />
    <Redirect from="*" to="/" />
  </Router>
)