import { useAuthContext } from "context";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ children }) {
  const { authState } = useAuthContext();
  const { loginStatus } = authState;
  const location = useLocation();
  return loginStatus ? <Navigate to="/products" replace /> : children;
}

export { CheckAuth };
