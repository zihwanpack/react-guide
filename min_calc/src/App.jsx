import InputBox from './components/InputBox/InputBox.jsx';
import Header from './components/Header/Header.jsx';
import ResultTable from './components/ResultTable/ResultTable.jsx';
import { useState } from 'react';
function App() {
  const [value, setValue] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const inputIsValid = value.duration > 0;
  const handleChange = (event) => {
    const { id, value } = event.target;
    setValue((prevState) => ({
      ...prevState,
      [id]: Number(value),
    }));
  };
  return (
    <>
      <Header />
      <InputBox onChange={handleChange} value={value} />
      {inputIsValid ? (
        <ResultTable value={value} />
      ) : (
        <p className="center">PLZ enter valid Value</p>
      )}
    </>
  );
}

export default App;
