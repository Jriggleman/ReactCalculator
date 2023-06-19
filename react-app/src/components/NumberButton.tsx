import { useState } from 'react';

interface Props {
  number: number;
}

const NumberButton = ({ number }: Props) => {
  const [selectedNumber, setSelectedNumber] = useState(number);

  const handleClick = () => {
    setSelectedNumber(number);
    console.log(selectedNumber);
  };

  return (
    <button type='button' className='btn btn-primary' onClick={handleClick}>
      {number}
    </button>
  );
};

export default NumberButton;
