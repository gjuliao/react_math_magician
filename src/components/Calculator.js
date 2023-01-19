/* eslint-disable quotes, no-console */

import React, { useState } from 'react';
import Buttons from './Buttons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const { total, next, operation } = value;

  const handleClick = (e) => {
    setValue((state) => calculate(state, e.target.innerText));
  };

  return (
    <>
      <div className="calculator_container">
        <h2 className="math_title">Lets do math!</h2>
        <section className="calculator mt-5 text-center">
          <div className="output d-flex justify-content-end bg-secondary text-light">
            <p className="my-auto p-2">
              {total}
              {operation}
              {next}
            </p>
          </div>
          <div className="d-flex">
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="AC" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="+/-" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="%" />
            <Buttons colors="bg-warning buttons" handleClick={handleClick} item="÷" />
          </div>
          <div className="d-flex">
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="7" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="8" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="9" />
            <Buttons colors="bg-warning buttons" handleClick={handleClick} item="x" />
          </div>
          <div className="d-flex">
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="4" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="5" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="6" />
            <Buttons colors="bg-warning buttons" handleClick={handleClick} item="-" />
          </div>
          <div className="d-flex">
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="1" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="2" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="3" />
            <Buttons colors="bg-warning buttons" handleClick={handleClick} item="+" />
          </div>
          <div className="d-flex">
            <Buttons colors="zero-btn bg-secondary-subtle" handleClick={handleClick} item="0" />
            <Buttons colors="bg-secondary-subtle buttons" handleClick={handleClick} item="." />
            <Buttons colors="bg-warning buttons" handleClick={handleClick} item="=" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Calculator;
