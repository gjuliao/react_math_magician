/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, handleClick, colors } = this.props;

    return (
      <button onClick={handleClick} type="button" className={`${colors} border border-light-subtle text-dark`}>
        {item}
      </button>
    );
  }
}

Buttons.defaultProps = {
  item: null,
  handleClick: null,
  colors: null,
};

Buttons.propTypes = {
  item: PropTypes.string,
  handleClick: PropTypes.func,
  colors: PropTypes.string,
};
