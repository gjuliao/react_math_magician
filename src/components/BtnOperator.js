/* eslint-disable quotes */

import React from "react";
import PropTypes from "prop-types";

export default class BtnOperator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, handleClick } = this.props;
    return (
      <button type="button" onClick={handleClick} className="bg-warning buttons border border-light-subtle text-dark">
        {item}
      </button>
    );
  }
}

BtnOperator.defaultProps = {
  item: null,
  handleClick: null,
};

BtnOperator.propTypes = {
  item: PropTypes.string,
  handleClick: PropTypes.func,
};
