import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TikTacToe from '../components/TikTacToe'
import Homepage from '../components/Homepage';

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

        </Switch>
      </Router>
    )
  }
}