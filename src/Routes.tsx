import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './Components/Welcome';
import Buttons from './Components/Buttons';

const Routes = () => (
 <>
   <Route exact path="/" component={Welcome} />
   <Route exact path="/board" component={Buttons} />
 </>
);

export default Routes;
