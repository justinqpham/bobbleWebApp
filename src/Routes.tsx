import React from "react";
import { Route } from "react-router-dom";

import Welcome from "./Components/Welcome";

export const Routes = () => (
  <>
    <Route exact path="/" render={Welcome} />
    <Route exact path="/board" />
  </>
);

export default Routes;
