/* eslint-disable quotes, jsx-quotes, react/prop-types */
import React from 'react';

const BtnNumbers = ({ item }) => (
  <div>
    <button className='btn btn-secondary buttons' type='button'>
      {item}
    </button>
  </div>
);

export default BtnNumbers;
