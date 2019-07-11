import React from "react";

import './NumberButton.scss'

const NumberButton = (props) => {
  return (
    <>
      <button 
      className='number-button'
      onClick={() => 
      {props.chosenOperator !== null ? 
      props.createSecondNum(props.number) : 
      props.createFirstNum(props.number)}}>{props.number}</button>
    </>
  );
};

export default NumberButton;