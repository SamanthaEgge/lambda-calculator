import React, { useState } from "react";

//import any components needed
import { specials } from '../../../data.js'
import './SpecialButton.scss'
import SpecialButton from './SpecialButton.js'

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsList, setSpecials] = useState(specials)
  console.log('specials', specials)

  return (
    <div className='specials'>
      {specialsList.map(special => (
        <SpecialButton special={special} />
      ))}
    </div>
  );
};

export default Specials;