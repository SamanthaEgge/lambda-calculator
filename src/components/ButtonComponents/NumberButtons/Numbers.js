import React, { useState } from "react";

//import any components needed
import { numbers } from '../../../data.js'
import './NumberButton.scss'
import NumberButton from './NumberButton.js'

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numbersList, setNumber] = useState(numbers)

  return (
    <div className='numbers'>
      {numbersList.map(number => (
        <NumberButton number={number} selectNumber={props.selectNumber} />
      ))}
    </div>
  );
};

export default Numbers;