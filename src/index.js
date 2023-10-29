import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
