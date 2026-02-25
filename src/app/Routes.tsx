import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import PrivateRoute from "../auth/components/PrivateRoute";
import PublicRoute from "../auth/components/PublicRoute";
import Login from "../auth/pages/Login";
import Cart from "../cart/pages/Cart";
import CheckoutPage from "../checkout/pages/CheckoutPage";
import ProductDetail from "../products/pages/ProductDetail";
import ErrorPage from "../ui/pages/ErrorPage";
import Home from "../ui/pages/Home";

const ProductList = lazy(() => import("../products/pages/ProductList"));

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
