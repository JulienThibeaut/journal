import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import ViewMonth from "./ViewMonth";
import ViewDay from "./ViewDay";
import ViewEditor from "./ViewEditor";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/calendar/:year" component={ViewMonth} />
      <Route exact path="/calendar/:year/:month" component={ViewDay} />
      <Route exact path="/calendar/:year/:month/:day" component={ViewEditor} />
    </Switch>
  );
}
