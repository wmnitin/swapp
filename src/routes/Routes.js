import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import loadable from "@loadable/component";

import TikTacToe from '../components/TikTacToe'
import Homepage from '../components/Homepage';
import TwoZeroFourEight from '../components/TwoZeroFourEight';
export default class Routes extends React.PureComponent {
  render() {
    return (
      <Router basename='/swapp'>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/tiktactoe">
            <TikTacToe />
          </Route>


          <Route path="/twozerofoureight">
            <TwoZeroFourEight />
          </Route>

        </Switch>
      </Router>
    )
  }
}