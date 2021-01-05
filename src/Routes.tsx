import React from "react";
import { Route } from "react-router-dom";

import Welcome from "./Components/Welcome";
import Buttons from "./Components/Buttons";

const Routes = () => (
  <>
    <Route exact path="/" render={Welcome} />
    <Route exact path="/board" render={Buttons} />
  </>
);

export default Routes;
