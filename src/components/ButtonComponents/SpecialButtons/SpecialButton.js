import React from "react";

import './SpecialButton.scss'

const SpecialButton = (props) => {
  return (
    <>{props.special === 'C' ? 
      <button className='special-button' onClick={props.clearDisplay}>{props.special}</button> :
      <button className='special-button'>{props.special}</button>
    }
    </>
  );
};

export default SpecialButton