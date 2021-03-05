import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  let auth = false;
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
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
