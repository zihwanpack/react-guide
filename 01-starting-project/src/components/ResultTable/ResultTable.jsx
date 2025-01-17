import React from 'react';
import { calculateInvestmentResults, formatter } from '../../util/investment.js';

const ResultTable = ({ initialInvestment, annualInvestment, expectedReturn, duration }) => {
  const annualValue = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  const headers = [
    'Year',
    'Investment Value',
    'Interest (Year)',
    'Total Interest',
    'Invested Capital',
  ];

  return (
    <table id="result">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {annualValue.map(({ year, valueEndOfYear, interest, annualInvestment }, index) => (
          <tr key={index}>
            <td>{year}</td>
            <td>{formatter.format(valueEndOfYear)}</td>
            <td>{formatter.format(interest)}</td>
            <td>
              {formatter.format(valueEndOfYear - (initialInvestment + annualInvestment * year))}
            </td>
            <td>{formatter.format(initialInvestment + annualInvestment * year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
