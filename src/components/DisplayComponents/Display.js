import React from "react";

import './Display.scss'

const Display = (props) => {
  return <div className='display'><p className='display-text'>{props.chosenOperator === null ? props.firstNum : props.secondNum}</p></div>;
};

export default Display;
