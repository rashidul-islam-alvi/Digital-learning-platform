import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

import TopBannner from "./Components/TopBannner";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopBannner />
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
