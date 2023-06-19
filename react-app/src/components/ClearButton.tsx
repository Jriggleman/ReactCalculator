interface Props {
  onClick: () => void;
}

const ClearButton = ({ onClick }: Props) => {
  return (
    <button type='button' className='btn btn-warning' onClick={onClick}>
      Clear
    </button>
  );
};

export default ClearButton;
