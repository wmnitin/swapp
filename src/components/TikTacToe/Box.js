import React from 'react';
import s from './index.module.scss';
// import cross from '../../images/cross.png'

export default class TikTacToe extends React.PureComponent {
  state = {
    value: null
  }

  boxClick = () => {
    let value = this.props.lastValue[0] === 'X' ? '0' : 'X';
    if (this.props.canModified === this.props.id && this.state.value) {
      value = '';
    } else if (this.props.canModified !== this.props.id && this.state.value) {
      return false;
    }
    this.setState({
      value
    })
    this.props.setFilledValue(this.props.id, value)
  }

  render() {
    return <div className={s.col} onClick={this.boxClick}>
      <span>{this.state.value}</span>
    </div>
  }

}