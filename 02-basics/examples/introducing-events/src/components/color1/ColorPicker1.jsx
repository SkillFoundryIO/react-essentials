import ColorButton1 from './ColorButton1'

function ColorPicker1() {
  function setBackgroundRed() {
    document.body.style.backgroundColor = 'lightcoral';
  }

  function setBackgroundBlue() {
    document.body.style.backgroundColor = 'lightblue';
  }

  function setBackgroundGreen() {
    document.body.style.backgroundColor = 'lightgreen';
  }

  return (
    <div>
      <h2>Choose a background color:</h2>
      <ColorButton1 color="Red" onColorSelect={setBackgroundRed} />
      <ColorButton1 color="Blue" onColorSelect={setBackgroundBlue} />
      <ColorButton1 color="Green" onColorSelect={setBackgroundGreen} />
    </div>
  );
}

export default ColorPicker1;