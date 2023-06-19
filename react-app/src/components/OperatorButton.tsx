import { useState } from 'react';

interface Props {
  operator: string;
}

const OperatorButton = ({ operator }: Props) => {
  const [selectedOperator, setSelectedOperator] = useState(operator);

  const handleClick = () => {
    setSelectedOperator(operator);
    console.log(selectedOperator);
  };

  return (
    <button type='button' className='btn btn-primary' onClick={handleClick}>
      {operator}
    </button>
  );
};

export default OperatorButton;
