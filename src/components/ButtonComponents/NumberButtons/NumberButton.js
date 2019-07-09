import React from "react";

import './NumberButton.scss'

const NumberButton = (props) => {
  return (
    <>
      <button className='number-button' onClick={() => {props.selectNumber(props.number)}}>{props.number}</button>
    </>
  );
};

export default NumberButton;