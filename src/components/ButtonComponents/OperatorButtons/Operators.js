import React, { useState } from "react";

//import any components needed
import { operators } from '../../../data.js'
import './OperatorButton.scss'
import OperatorButton from './OperatorButton.js'

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorsList, setOperator] = useState(operators)

  return (
    <div className='operators'>
      {operatorsList.map(operator => (
        <OperatorButton operator={operator} selectOperators={props.selectOperators} />
      ))}
    </div>
  );
};

export default Operators;