/* eslint-disable quotes, jsx-quotes, react/prop-types */
import React from 'react';

export default class BtnOperator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <button className='btn btn-warning buttons' type='button'>
          {item}
        </button>
      </div>
    );
  }
}
