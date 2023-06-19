interface Props {
  onClick: () => void;
}

const EqualButton = ({ onClick }: Props) => {
  return (
    <button type='button' className='btn btn-primary' onClick={onClick}>
      =
    </button>
  );
};

export default EqualButton;
