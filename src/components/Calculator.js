// src/components/Calculator.js
import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css'; // Agrega un archivo de estilos personalizado

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const numberButtons = [];
  for (let i = 1; i <= 9; i++) {
    numberButtons.push(<Button key={i} value={i.toString()} onClick={handleButtonClick} />);
  }

  return (
    <div className="calculator">
      <input className="form-control mb-3" type="text" value={input} readOnly />
      <div className="calculator-buttons">
        <div className="row">
          <div className="col-md-9">
            <div className="d-flex flex-wrap justify-content-between">
              {numberButtons}
              <Button value="0" onClick={handleButtonClick} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-wrap flex-column justify-content-between">
              <Button value="+" onClick={handleButtonClick} />
              <Button value="-" onClick={handleButtonClick} />
              <Button value="*" onClick={handleButtonClick} />
              <Button value="/" onClick={handleButtonClick} />
              <Button value="=" onClick={handleCalculate} />
              <Button value="C" onClick={handleClear} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
