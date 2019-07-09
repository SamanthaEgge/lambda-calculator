import React from "react";

import './SpecialButton.scss'

const SpecialButton = (props) => {
  return (
    <>
      <button className='special-button'>{props.special}</button>
    </>
  );
};

export default SpecialButton