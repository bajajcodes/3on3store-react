import React from "react";
import ReactDOM from "react-dom";
import { makeServer } from "server";
import { RouteSwitch } from "RouteSwitch";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>,
  document.getElementById("root")
);
