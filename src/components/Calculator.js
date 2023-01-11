/* eslint-disable quotes, no-console */

import React from "react";
import BtnNumbers from "./BtnNumbers";
import BtnOperator from "./BtnOperator";
import Zero from "./Zero";
import calculate from "../logic/calculate";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0, next: null, operation: null,
    };
  }

  handleClick = (e) => {
    this.setState((state) => calculate(state, e.target.innerText));
  };

  render() {
    const { total, next, operation } = this.state;

    return (
      <section className="calculator mt-5 text-center">
        <div className="output d-flex justify-content-end bg-secondary text-light">
          <p className="my-auto p-2">
            {total}
            {operation}
            {next}
          </p>
        </div>
        <div className="d-flex">
          <BtnNumbers handleClick={this.handleClick} item="AC" />
          <BtnNumbers handleClick={this.handleClick} item="+/-" />
          <BtnNumbers handleClick={this.handleClick} item="%" />
          <BtnOperator handleClick={this.handleClick} item="÷" />
        </div>
        <div className="d-flex">
          <BtnNumbers handleClick={this.handleClick} item="7" />
          <BtnNumbers handleClick={this.handleClick} item="8" />
          <BtnNumbers handleClick={this.handleClick} item="9" />
          <BtnOperator handleClick={this.handleClick} item="x" />
        </div>
        <div className="d-flex">
          <BtnNumbers handleClick={this.handleClick} item="4" />
          <BtnNumbers handleClick={this.handleClick} item="5" />
          <BtnNumbers handleClick={this.handleClick} item="6" />
          <BtnOperator handleClick={this.handleClick} item="-" />
        </div>
        <div className="d-flex">
          <BtnNumbers handleClick={this.handleClick} item="1" />
          <BtnNumbers handleClick={this.handleClick} item="2" />
          <BtnNumbers handleClick={this.handleClick} item="3" />
          <BtnOperator handleClick={this.handleClick} item="+" />
        </div>
        <div className="d-flex">
          <Zero handleClick={this.handleClick} item="0" />
          <BtnNumbers handleClick={this.handleClick} item="." />
          <BtnOperator handleClick={this.handleClick} item="=" />
        </div>
      </section>
    );
  }
}
