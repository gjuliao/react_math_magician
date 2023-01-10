/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";

export default class Zero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <div className="bg-secondary-subtle zero-btn shadow-none border-0 text-dark">
        {item}
      </div>
    );
  }
}

Zero.defaultProps = {
  item: null,
};

Zero.propTypes = {
  item: PropTypes.string,
};
