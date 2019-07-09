import React from "react";

import './NumberButton.scss'

const NumberButton = (props) => {
  return (
    <>
      <button className='number-button'>{props.number}</button>
    </>
  );
};

export default NumberButton;