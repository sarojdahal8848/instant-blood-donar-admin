import { Navigate } from "react-router-dom";
import { useAuth } from "../../utils";

interface RouteProp {
  redirectUrl?: string;
  children?: React.ReactNode;
}

const ProtectedRoute = ({ redirectUrl = "/login", children }: RouteProp) => {
  const userId = useAuth();
  return <>{!userId ? <Navigate to={redirectUrl} /> : children}</>;
};

export { ProtectedRoute };
