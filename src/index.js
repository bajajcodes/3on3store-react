import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "server";
import { RouteSwitch } from "RouteSwitch";
import { ProductProvider, WishlistProvider, CartProvider } from "context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
      <WishlistProvider>
      <RouteSwitch />
      </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
