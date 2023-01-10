/* eslint-disable quotes */

import React from "react";
import BtnNumbers from "./BtnNumbers";
import BtnOperator from "./BtnOperator";
import Zero from "./Zero";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator mt-5 text-center">
        <div className="output d-flex justify-content-end bg-secondary text-light">
          <p className="my-auto p-2">0</p>
        </div>
        <div className="d-flex">
          <BtnNumbers item="AC" />
          <BtnNumbers item="+/-" />
          <BtnNumbers item="%" />
          <BtnOperator item="÷" />
        </div>
        <div className="d-flex">
          <BtnNumbers item="7" />
          <BtnNumbers item="8" />
          <BtnNumbers item="9" />
          <BtnOperator item="*" />
        </div>
        <div className="d-flex">
          <BtnNumbers item="4" />
          <BtnNumbers item="5" />
          <BtnNumbers item="6" />
          <BtnOperator item="-" />
        </div>
        <div className="d-flex">
          <BtnNumbers item="1" />
          <BtnNumbers item="2" />
          <BtnNumbers item="3" />
          <BtnOperator item="+" />
        </div>
        <div className="d-flex">
          <Zero item="0" />
          <BtnNumbers item="." />
          <BtnOperator item="=" />
        </div>
      </section>
    );
  }
}
