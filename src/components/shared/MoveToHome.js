import React from 'react';
import s from './MoveToHome.module.scss';

const back = () => {
  window.history.back()
}

export default () =>{
  return <button className={s.back} onClick={back}>Back to Home</button>
}