function ColorButton1({ color, onColorSelect }) {
  return (
    <button onClick={onColorSelect}>
      {color}
    </button>
  );
}

export default ColorButton1;