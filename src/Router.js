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
  const { year, month, day } = rest.computedMatch.params;

  const isNextYear = Number(year) > dayjs().year();
  const isNextDay = day > dayjs().date();
  const isNextMonth = Number(month) > dayjs().month() + 1;
  const isCurrentYear = Number(year) === dayjs().year();
  const isCurrentMonth = Number(month) === dayjs().month() + 1;

  const isDisabledRoute =
    (isNextDay && isCurrentMonth && isCurrentYear) ||
    (isNextMonth && isCurrentYear) ||
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
