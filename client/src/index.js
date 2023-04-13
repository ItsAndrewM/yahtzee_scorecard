import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GrandTotalProvider } from "./static_yahtzee/GrandTotalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GrandTotalProvider>
    <App />
  </GrandTotalProvider>
);
