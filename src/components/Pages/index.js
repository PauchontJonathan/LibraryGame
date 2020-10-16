import React from 'react';
import { Route } from 'react-router-dom';
import Main from 'src/components/Pages/Main';

import './pages.scss';

const Pages = () => (
  <div className="pages">
    <Route exact path="/">
      <Main />
    </Route>
    <Route exact path="/:page">
      <Main />
    </Route>
  </div>
)

export default Pages;