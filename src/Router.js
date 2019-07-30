import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import App from "./App";
import ViewMonth from "./ViewMonth";
import ViewDay from "./ViewDay";
import ViewEditor from "./ViewEditor";
import dayjs from "dayjs";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <PrivateRoute exact path="/calendar/:year" component={ViewMonth} />
      <PrivateRoute exact path="/calendar/:year/:month" component={ViewDay} />
      <PrivateRoute
        exact
        path="/calendar/:year/:month/:day"
        component={ViewEditor}
      />
    </Switch>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { year, month } = rest.computedMatch.params;

  const isNextYear = Number(year) > dayjs().year();
  const isCurrentYear = Number(year) === dayjs().year();

  const isDisabledRoute =
    (dayjs().month() + 1 < Number(month) && isCurrentYear) ||
    (!month && isNextYear) ||
    isNextYear;

  return (
    <Route
      {...rest}
      render={props =>
        !isDisabledRoute ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
};
