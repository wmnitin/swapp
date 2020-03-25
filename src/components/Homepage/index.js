import React from "react";
import s from './index.module.scss';
import {
  Link
} from "react-router-dom";

export default class Homepage extends React.PureComponent {

  render() {
    return <div className={s.container}>
      <h2>Homepage</h2>
      <ul>
        <li><Link to='/tiktactoe'>Tic Tak Toe</Link></li>
      </ul>
    </div>
  }
}
