import ColorButton1 from "../color1/ColorButton1"

function ColorPicker2() {
  function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

  return (
    <div>
      <h2>Choose a background color:</h2>
      <ColorButton1 color="Red" 
        onColorSelect={() => setBackgroundColor('lightcoral')} />
      <ColorButton1 color="Blue" 
        onColorSelect={() => setBackgroundColor('lightblue')} />
      <ColorButton1 color="Green" 
        onColorSelect={() => setBackgroundColor('lightgreen')} />
    </div>
  );
}

export default ColorPicker2