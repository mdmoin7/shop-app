import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import Checkout from "./containers/Checkout";
import Demo from "./containers/Demo";
import Login from "./containers/Login";
// import ProductList from "./containers/ProductList";

type RProps = {};

const LazyProductList = React.lazy(() => import("./containers/ProductList"));

const AppRouter: React.FC<RProps> = (props) => {
  return (
    <div className="container-fluid" style={{ marginTop: "5rem" }}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={"/"} component={Demo} exact={true} />
          <Route path={"/products"} component={LazyProductList} />
          <Route path={"/login"} component={Login} />
          <PrivateRoute
            path={"/checkout/:transaction_id"}
            component={Checkout}
          />
          {/* 404 ROUTE : always at the bottom */}
          <Route component={ErrorPage} />
        </Switch>
      </React.Suspense>
    </div>
  );
};
export default AppRouter;
