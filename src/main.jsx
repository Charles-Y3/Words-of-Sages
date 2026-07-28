import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { migrateLegacyStorage } from "./utils/migrateLegacyStorage";
import "./styles/base.css";

migrateLegacyStorage();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
