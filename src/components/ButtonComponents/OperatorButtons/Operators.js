import React, { useState } from "react";

//import any components needed
import { operators } from '../../../data.js'
import OperatorButton from './OperatorButton.js'

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorsList, setOperator] = useState(operators)

  return (
    <div>
      {operatorsList.map(operator => (
        <OperatorButton operator={operator} />
      ))}
    </div>
  );
};

export default Operators;