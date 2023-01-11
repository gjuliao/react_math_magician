/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";

export default class Zero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, handleClick } = this.props;
    return (
      <button onClick={handleClick} type="button" className="bg-secondary-subtle zero-btn border border-light-subtle text-dark">
        {item}
      </button>
    );
  }
}

Zero.defaultProps = {
  item: null,
  handleClick: null,
};

Zero.propTypes = {
  item: PropTypes.string,
  handleClick: PropTypes.func,
};
