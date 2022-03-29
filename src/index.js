import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "server";
import { RouteSwitch } from "RouteSwitch";
import { ContextProvider } from "./ConextProviders";
// import {
//   ProductProvider,
//   WishlistProvider,
//   CartProvider,
//   AuthProvider,
// } from "context";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    {/* <ProductProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <RouteSwitch />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ProductProvider> */}
    <ContextProvider>
      <RouteSwitch />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
