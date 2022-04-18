import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./auth.reducer";
import {
  checkIsTokenExsist,
  removeAddress,
  saveAddress,
  login,
  logout,
  signup,
} from "./auth.context.helper";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const loginStatus = checkIsTokenExsist();
  const [authState, authDispatch] = useReducer(reducerFunction, {
    loginStatus,
  });


  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        removeAddress,
        saveAddress,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };
