import { useState } from 'react';
import EqualButton from './EqualButton';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import ClearButton from './ClearButton';
import DecimalButton from './DecimalButton';

const Calculator = () => {
  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [firstNumber, setFirstNumber] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [selectedOperator, setSelectedOperator] = useState('');
  const [numberArr, setNumberArr] = useState<number[]>([]);
  const [numberArr2, setNumberArr2] = useState<number[]>([]);

  const handleNumberButtonClick = (number: number) => {
    if (selectedOperator === '') {
      setNumberArr([...numberArr, number]);
      const concatenated = [...numberArr, number].join('');
      setFirstNumber(parseInt(concatenated));
    } else {
      setNumberArr2([...numberArr2, number]);
      const concatenated = [...numberArr2, number].join('');
      setSelectedNumber(parseInt(concatenated));
    }
  };

  const handleOperatorButtonClick = (operator: string) => {
    setSelectedOperator(operator);
  };

  const handleEqualButtonClick = () => {
    if (selectedNumber !== 0 && selectedOperator !== '') {
      let result = 0;
      switch (selectedOperator) {
        case '+':
          result = firstNumber + selectedNumber;
          console.log(firstNumber + ' + ' + selectedNumber);
          break;
        case '-':
          result = firstNumber - selectedNumber;
          console.log(firstNumber + ' - ' + selectedNumber);
          break;
        case '*':
          result = firstNumber * selectedNumber;
          console.log(firstNumber + ' * ' + selectedNumber);
          break;
        case '/':
          result = firstNumber / selectedNumber;
          console.log(firstNumber + ' / ' + selectedNumber);
          break;
        default:
          break;
      }
      console.log('= ' + result);
      setFirstNumber(result);
      setNumberArr2([]);
      setSelectedNumber(0);
    }
  };

  const handleClearButtonClick = () => {
    setFirstNumber(0);
    setSelectedOperator('');
    setSelectedNumber(0);
    setNumberArr([]);
    setNumberArr2([]);
  };

  return (
    <>
      <div className='btn-group-vertical' role='group' aria-label='Vertical button group'>
        <ClearButton onClick={handleClearButtonClick} />
        <div className='btn-group' role='group' aria-label='Horizontal button group'>
          {numbers.map(
            (number, index) =>
              index >= 1 &&
              index <= 3 && (
                <NumberButton number={number} key={number} onClick={handleNumberButtonClick} />
              )
          )}
          <OperatorButton operator='/' onClick={handleOperatorButtonClick} />
        </div>
        <div className='btn-group' role='group' aria-label='Horizontal button group'>
          {numbers.map(
            (number, index) =>
              index > 3 &&
              index <= 6 && (
                <NumberButton number={number} key={number} onClick={handleNumberButtonClick} />
              )
          )}
          <OperatorButton operator='*' onClick={handleOperatorButtonClick} />
        </div>
        <div className='btn-group' role='group' aria-label='Horizontal button group'>
          {numbers.map(
            (number, index) =>
              index > 6 &&
              index <= 10 && (
                <NumberButton number={number} key={number} onClick={handleNumberButtonClick} />
              )
          )}
          <OperatorButton operator='-' onClick={handleOperatorButtonClick} />
        </div>
        <div className='btn-group' role='group' aria-label='Horizontal button group'>
          <NumberButton number={numbers[0]} key={numbers[0]} onClick={handleNumberButtonClick} />
          <DecimalButton />

          <OperatorButton operator='+' onClick={handleOperatorButtonClick} />
        </div>
        <EqualButton onClick={handleEqualButtonClick} />
      </div>
    </>
  );
};

export default Calculator;
