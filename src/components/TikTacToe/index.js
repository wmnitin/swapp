import React from 'react';
import s from './index.module.scss';
import Box from './Box';
import { checkWinner } from './winner';

export default class TikTacToe extends React.PureComponent {

  boxArr = ['0', '1', '2'];

  state = {
    canModified: '',
    lastValue: ['X'],
    filledArray: [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ],
    winner: false
  }

  resetIt = () => {
    window.location.reload();
  }

  back = () => {
    window.history.back()
  }

  setFilledValue = (id, value) => {
    const filledArray = [...this.state.filledArray]
    const lastValue = [...this.state.lastValue]

    const row = Number(id[0]);
    const col = Number(id[1]);

    filledArray[row][col] = value;
    if (value) {
      lastValue.push(value)
    } else {
      lastValue.pop();
    }

    this.setState({
      filledArray,
      canModified: id,
      lastValue
    })

    if (lastValue.length > 5) {
      const winner = checkWinner(filledArray);
      winner && this.setState({
        winner
      })
    }
  }

  render() {
    return <div className={s.parent}>
      <div className={this.state.winner === false ? s.container : `${s.container + ' ' + s.disable}`}>
        {
          this.boxArr.map((row) => {
            return <div className={s.row} key={row}>
              {
                this.boxArr.map((col) => {
                  return <Box
                    key={col + row}
                    id={col + row}
                    canModified={this.state.canModified}
                    lastValue={this.state.lastValue.slice(-1)}
                    setFilledValue={this.setFilledValue}
                  />
                })
              }
            </div>
          })
        }
      </div>
      <button className={s.reset} onClick={this.resetIt}>RESET</button>
      {this.state.winner && <h2>Winner is {this.state.winner}</h2>}
      <button className={s.back} onClick={this.back}>Back to Home</button>
    </div >
  }
}