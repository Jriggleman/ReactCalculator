import EqualButton from './EqualButton';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';

const Calculator = () => {
  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <div className='btn-group-vertical' role='group' aria-label='Vertical button group'>
        <div className='btn-group' role='group' aria-label='Horizontal button group'>
          {numbers.map(
            (number, index) =>
              index >= 1 && index <= 3 && <NumberButton number={number} key={number} />
          )}
          <OperatorButton operator='/' />
        </div>
        <div className='btn-group' role='group' aria-label='Horizontal button group'>
          {numbers.map(
            (number, index) =>
              index > 3 && index <= 6 && <NumberButton number={number} key={number} />
          )}
          <OperatorButton operator='x' />
        </div>
        <div className='btn-group' role='group' aria-label='Horizontal button group'>
          {numbers.map(
            (number, index) =>
              index > 6 && index <= 10 && <NumberButton number={number} key={number} />
          )}
          <OperatorButton operator='-' />
        </div>
        <div className='btn-group' role='group' aria-label='Horizontal button group'>
          <NumberButton number={numbers[0]} key={numbers[0]} />
          <OperatorButton operator='+' />
        </div>
        <EqualButton />
      </div>
    </>
  );
};

export default Calculator;
