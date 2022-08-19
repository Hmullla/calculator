import './App.css';
import React, { useState } from "react";

function App() {
  const digits = ['1','2','3','4','5','6','7','8','9','0'];
  const operators = ['+','-','*','/'];

  const [result, setResult] = useState("");

  const handleClick = (button) => {
    if(
      operators.includes((button)) && result === '' ||
      operators.includes((button)) && operators.includes(result.slice(-1))
      )
    {
      return;
    }
    setResult(result + button);

    if (!operators.includes((button))) {
      setResult(eval(result + button).toString());
    }
  }

  const calculate = () => {
    setResult(eval(result).toString());
  }

  const deleteNums = () => {
    if (result == ''){
      return;
    }

    const button = result.slice(0, -1);

    setResult((button));
  }

  const dig = digits.map(buttons => {
    return <button name={digits} onClick={() => handleClick(buttons)}>{buttons}</button>;
  });
  const opp = operators.map(buttons => {
    return <button name={operators} onClick={() => handleClick(buttons)}>{buttons}</button>;
  });
    return (
      <div className='App'>
        <div className='display'>
          <p>{result || "0" }</p>
        </div>
        <div className='calc'>
          {dig}
          {opp}
          <button onClick={deleteNums}>DEL</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    );
  }


export default App;