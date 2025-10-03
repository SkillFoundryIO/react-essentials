function TipButton({ percentage, isSelected, onClick }) {
  return (
    <div className="col-4">
      <button
        onClick={() => onClick(percentage)}
        className={`btn w-100 ${
          isSelected ? 'btn-primary' : 'btn-outline-primary'
        }`}
      >
        {percentage}%
      </button>
    </div>
  );
}

export default TipButton;