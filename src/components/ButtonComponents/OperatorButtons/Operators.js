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
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;