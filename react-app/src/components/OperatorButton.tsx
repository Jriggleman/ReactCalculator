interface Props {
  operator: string;
  onClick: (operator: string) => void;
}

const OperatorButton = ({ onClick, operator }: Props) => {
  const handleClick = () => {
    onClick(operator);
  };

  return (
    <button type='button' className='btn btn-secondary' onClick={handleClick}>
      {operator}
    </button>
  );
};

export default OperatorButton;
