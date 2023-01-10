/* eslint-disable quotes */

import React from "react";
import PropTypes from "prop-types";

export default class BtnOperator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    return (
      <div className="bg-warning buttons border-0 shadow-none text-dark">
        {item}
      </div>
    );
  }
}

BtnOperator.defaultProps = {
  item: null,
};

BtnOperator.propTypes = {
  item: PropTypes.string,
};
