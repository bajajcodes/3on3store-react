import { RouteSwitch } from "./RouteSwitch";
import { ContextProvider } from "./ConextProviders";

function App() {
  return (
    <ContextProvider>
      <RouteSwitch />
    </ContextProvider>
  );
}

export { App };
