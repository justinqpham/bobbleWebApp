import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './Components/Welcome';
import Buttons from './Components/Buttons';
import PrivacyPolicy from './Components/PrivacyPolicy';

const Routes = () => (
 <>
   <Route exact path="/" component={Welcome} />
   <Route exact path="/board" component={Buttons} />
   <Route exact path="/privacy" component={PrivacyPolicy} />
 </>
);

export default Routes;
