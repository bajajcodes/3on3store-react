import { useAuthContext } from "context";
import { Navigate, useLocation } from "react-router-dom";

function RequiresAuth({ children }) {
  const { authState } = useAuthContext();
  const { loginStatus } = authState;
  const location = useLocation();
  const { pathname } = location;
  return loginStatus ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: pathname }} replace />
  );
}

export { RequiresAuth };
