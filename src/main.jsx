import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from "./Context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
