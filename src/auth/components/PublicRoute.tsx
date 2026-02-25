import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PublicRoute({ children }: PropsWithChildren) {
  const user = useSelector((state: any) => !!state.user);

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

export default PublicRoute;
