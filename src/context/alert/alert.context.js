import { useContext, createContext, useReducer } from "react";
import { reducerFunction } from "./reducerFunction";
import { showAlert, hideAlert } from "./alert.context.helper";

const defaultAlertState = {
  title: "",
  description: "",
  type: "",
  display: "none",
};

const AlertContext = createContext(null);

function useAlert() {
  return useContext(AlertContext);
}

function AlertProvider({ children }) {
  const [alertState, alertDispatch] = useReducer(
    reducerFunction,
    defaultAlertState
  );

  return (
    <AlertContext.Provider
      value={{ alertState, alertDispatch, showAlert, hideAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
}

export { AlertProvider, useAlert };
