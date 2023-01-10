/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";

export default class BtnNumbers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <div className="bg-secondary-subtle buttons border-0 shadow-none text-dark">
        {item}
      </div>
    );
  }
}

BtnNumbers.defaultProps = {
  item: null,
};

BtnNumbers.propTypes = {
  item: PropTypes.string,
};
