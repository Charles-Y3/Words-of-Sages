import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { migrateLegacyStorage } from "./utils/migrateLegacyStorage";
import { registerPwaInstall } from "./utils/pwaInstall";
import "./styles/base.css";

migrateLegacyStorage();
registerPwaInstall();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
