import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.scss";
import { ProviderProductContext } from "./contexts/ProductContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderProductContext>
      <App />
    </ProviderProductContext>
  </React.StrictMode>
);
