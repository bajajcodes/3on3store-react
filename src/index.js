import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "server";
import { RouteSwitch } from "RouteSwitch";
import { ProductProvider } from "context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <RouteSwitch />
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
