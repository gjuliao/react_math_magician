/* eslint-disable quotes, jsx-quotes, react/prop-types */
import React from 'react';

export default class BtnNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <button className='btn btn-secondary buttons' type='button'>
          {item}
        </button>
      </div>
    );
  }
}
