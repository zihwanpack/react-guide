import React, { useState } from 'react';
import ResultTable from '../ResultTable/ResultTable.jsx';

const InputBox = () => {
  const [value, setValue] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const { initialInvestment, annualInvestment, expectedReturn, duration } = value;

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            id="initialInvestment"
            type="number"
            className="input-group"
            value={initialInvestment}
            onChange={handleChange}
          />
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            id="annualInvestment"
            type="number"
            className="input-group"
            value={annualInvestment}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            className="input-group"
            value={expectedReturn}
            onChange={handleChange}
          />
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            className="input-group"
            value={duration}
            onChange={handleChange}
          />
        </div>
      </section>
      <ResultTable
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </>
  );
};

export default InputBox;
