import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { RootState } from "../store";

// PrivateRoute.tsx
function PrivateRoute({ children }: PropsWithChildren) {
  const isLoggedIn = useSelector((state: RootState) => !!state.user);

  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
