import { Route, Routes } from "react-router";
import Demo from "./Demo";
// import ProductList from "./containers/ProductList";
import Checkout from "./containers/Checkout";
import ErrorPage from "./containers/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetail from "./containers/ProductDetail";
import { lazy, Suspense } from "react";
import Login from "./containers/Login";
import Home from "./containers/Home";
import Cart from "./containers/Cart";
import CheckoutPage from "./containers/CheckoutPage";
import PublicRoute from "./components/PublicRoute";

const ProductList = lazy(() => import("./containers/ProductList"));

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/products"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductList />
          </Suspense>
        }
      />
      <Route path="/details/:pid" element={<ProductDetail />} />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login mode="login" />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Login mode="signup" />
          </PublicRoute>
        }
      />
      <Route path="/cart" element={<Cart />} />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default AppRouter;
