import { useAuthContext } from "context";
import { Navigate } from "react-router-dom";

function CheckAuth({ children }) {
  const { authState } = useAuthContext();
  const { loginStatus } = authState;
  return loginStatus ? <Navigate to="/products" replace /> : children;
}

export { CheckAuth };
