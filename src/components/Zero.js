/* eslint-disable quotes, jsx-quotes, react/prop-types */
import React from 'react';

export default class Zero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <button className='btn btn-secondary zero-btn' type='button'>
          {item}
        </button>
      </div>
    );
  }
}
