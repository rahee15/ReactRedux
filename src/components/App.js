/* eslint-disable import/no-named-as-default */
import { Route, Switch } from "react-router-dom";

import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import product from "./containers/__snapshots__/product";
import cart from "./containers/__snapshots__/cart";


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        
        <Switch>
          <Route exact path="/" component={product} />
          <Route exact path="/cart" component={cart} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
