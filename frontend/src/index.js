import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.js";
import "./app.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <img
        id="logo"
        src="https://econnect.embarckle.com/logo-text-light.63fac4b2.png"
        alt="Loading"
      />
    <App />
  </BrowserRouter>
);
