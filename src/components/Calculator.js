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

  const handleScientificButtonClick = (value) => {
    if (value === 'sin' || value === 'cos' || value === 'tan') {
      setInput(`Math.${value}(Math.PI / 180 * ${input})`); // Convierte grados a radianes
    } else if (value === '^') {
      setInput(input + '**'); // Usa ** para representar la potenciación
    } else {
      setInput(input + value);
    }
  };

  const basicOperationButtons = ['+', '-', '*', '/'];
  const numberButtons = [];
  for (let i = 1; i <= 9; i++) {
    numberButtons.push(<Button key={i} value={i.toString()} onClick={handleButtonClick} />);
  }

  const scientificOperationButtons = ['sin', 'cos', 'tan', 'log', '^'];

  return (
    <div className="calculator">
      <input className="form-control mb-3" type="text" value={input} readOnly />
      <div className="calculator-buttons">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex flex-wrap justify-content-between">
              {numberButtons}
              <Button value="0" onClick={handleButtonClick} />
              <Button value="(" onClick={handleButtonClick} />
              <Button value=")" onClick={handleButtonClick} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-wrap flex-column justify-content-between">
              {basicOperationButtons.map((value) => (
                <Button key={value} value={value} onClick={handleButtonClick} />
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-wrap flex-column justify-content-between">
              {scientificOperationButtons.map((value) => (
                <Button key={value} value={value} onClick={() => handleScientificButtonClick(value)} />
              ))}
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
