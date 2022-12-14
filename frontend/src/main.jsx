import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/index.scss";
import { CitasProvider } from "./context/CitasProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
