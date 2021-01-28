import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

declare var screen: any;
if (screen && screen.lockOrientation) {
  screen.lockOrientation("portrait");
}

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
