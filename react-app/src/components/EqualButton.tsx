interface Props {
  onClick: () => void;
}

const EqualButton = ({ onClick }: Props) => {
  return (
    <button type='button' className='btn btn-danger' onClick={onClick}>
      =
    </button>
  );
};

export default EqualButton;
