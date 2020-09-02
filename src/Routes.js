import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Inventory from './components/Inventory';
import Cart from './components/Cart';

function Routes() {
  return (
    <Switch>
      <Route exact path="/inventory/:id"></Route>
      <Route exact path="/"><Inventory /></Route>
      <Route exact path="/cart"><Cart /></Route>
      <Redirect to="/" />
    </Switch>
  )
};

export default Routes;