import React from "react";

import './OperatorButton.scss'

const OperatorButton = (props) => {
  return (
    <>
      <button className='operator-button'>{props.operator.char}</button>
    </>
  );
};

export default OperatorButton