import React from "react";
import {hashHistory, IndexRoute, Redirect, Route, Router} from "react-router";
import Dashboard from "../dashboard/dashboard";
import PaymentCycle from "../paymentCycle/paymentCycle";
import AuthOrApp from "./authOrApp";


export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp}>
      <IndexRoute component={Dashboard}/>
      <Route path="paymentCycle" component={PaymentCycle}/>
    </Route>
    <Redirect from="*" to="/"/>
  </Router>
)