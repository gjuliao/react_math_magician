/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";

export default class BtnNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, handleClick } = this.props;

    return (
      <button onClick={handleClick} type="button" className="bg-secondary-subtle buttons border border-light-subtle text-dark">
        {item}
      </button>
    );
  }
}

BtnNumbers.defaultProps = {
  item: null,
  handleClick: null,
};

BtnNumbers.propTypes = {
  item: PropTypes.string,
  handleClick: PropTypes.func,
};
