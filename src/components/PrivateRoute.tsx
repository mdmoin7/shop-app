import React from "react";
import { useStore } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { StoreType } from "../types";

const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const store = useStore<StoreType>();
  const auth = !!store.getState().userSession.user;

  const RoutedComponent = component as React.ComponentClass;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <RoutedComponent />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location.pathname },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
