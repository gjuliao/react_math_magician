/* eslint-disable quotes, jsx-quotes, react/prop-types */
import React from 'react';

const BtnOperator = ({ item }) => (
  <div>
    <button className='btn btn-warning buttons' type='button'>
      {item}
    </button>
  </div>
);

export default BtnOperator;
