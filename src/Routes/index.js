import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Home, Login, Signup, ForgotPassword } from "../containers";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export default function Route() {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/login" exact component={Login} />
        <PublicRoute path="/signup" exact component={Signup} />
        <PublicRoute path="/forgotPassword" exact component={ForgotPassword} />
      </Switch>
    </Router>
  );
}
