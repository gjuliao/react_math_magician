/* eslint-disable quotes, no-console */

import React, { useState } from "react";
import BtnNumbers from "./BtnNumbers";
import BtnOperator from "./BtnOperator";
import Zero from "./Zero";
import calculate from "../logic/calculate";

const Calculator = () => {
  const [value, setValue] = useState({
    total: 0, next: null, operation: null,
  });

  const { total, next, operation } = value;

  const handleClick = (e) => {
    setValue((state) => calculate(state, e.target.innerText));
  };

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
        <BtnNumbers handleClick={handleClick} item="AC" />
        <BtnNumbers handleClick={handleClick} item="+/-" />
        <BtnNumbers handleClick={handleClick} item="%" />
        <BtnOperator handleClick={handleClick} item="÷" />
      </div>
      <div className="d-flex">
        <BtnNumbers handleClick={handleClick} item="7" />
        <BtnNumbers handleClick={handleClick} item="8" />
        <BtnNumbers handleClick={handleClick} item="9" />
        <BtnOperator handleClick={handleClick} item="x" />
      </div>
      <div className="d-flex">
        <BtnNumbers handleClick={handleClick} item="4" />
        <BtnNumbers handleClick={handleClick} item="5" />
        <BtnNumbers handleClick={handleClick} item="6" />
        <BtnOperator handleClick={handleClick} item="-" />
      </div>
      <div className="d-flex">
        <BtnNumbers handleClick={handleClick} item="1" />
        <BtnNumbers handleClick={handleClick} item="2" />
        <BtnNumbers handleClick={handleClick} item="3" />
        <BtnOperator handleClick={handleClick} item="+" />
      </div>
      <div className="d-flex">
        <Zero handleClick={handleClick} item="0" />
        <BtnNumbers handleClick={handleClick} item="." />
        <BtnOperator handleClick={handleClick} item="=" />
      </div>
    </section>
  );
};

export default Calculator;
