import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "server";
import { RouteSwitch } from "RouteSwitch";
import { ProductProvider, WishlistProvider } from "context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <WishlistProvider>
      <RouteSwitch />
      </WishlistProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
