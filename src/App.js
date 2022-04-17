import { RouteSwitch } from "./RouteSwitch";
import { ContextProvider } from "./ConextProviders";
import { Alert } from "components";

function App() {
  return (
    <ContextProvider>
      <Alert />
      <RouteSwitch />
    </ContextProvider>
  );
}

export { App };
