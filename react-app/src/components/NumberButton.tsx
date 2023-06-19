interface Props {
  number: number;
  onClick: (number: number) => void;
}

const NumberButton = ({ number, onClick }: Props) => {
  const handleClick = () => {
    onClick(number);
  };

  return (
    <button type='button' className='btn btn-primary' onClick={handleClick}>
      {number}
    </button>
  );
};

export default NumberButton;
