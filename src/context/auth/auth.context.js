import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./auth.reducer";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [authState, authDispatch] = useReducer(reducerFunction, {
    loginStatus: false,
    signupStatus: false,
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
