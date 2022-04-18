import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./auth.reducer";
import {
  checkIsTokenExsist,
  getuserInfo,
  removeAddress,
  saveAddress,
  login,
  logout,
  signup,
} from "./auth.context.helper";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const userInfo = getuserInfo();
  const loginStatus = checkIsTokenExsist();
  const [authState, authDispatch] = useReducer(reducerFunction, {
    loginStatus,
    userInfo,
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
