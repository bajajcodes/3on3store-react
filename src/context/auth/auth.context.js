import { useContext, createContext, useReducer, useEffect } from "react";
import { reducerFunction } from "./auth.reducer";

const AuthContext = createContext(null);

function checkIsTokenExsist() {
  const token = localStorage.getItem("token");
  return token ? true : false;
}

function AuthProvider({ children }) {
  const loginStatus = checkIsTokenExsist();
  const [authState, authDispatch] = useReducer(reducerFunction, {
    loginStatus,
  });


  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };
