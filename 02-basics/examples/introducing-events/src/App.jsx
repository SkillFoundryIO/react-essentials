import './App.css'
import ColorPicker1 from './components/color1/ColorPicker1'
import ColorPicker2 from './components/color2/ColorPicker2'
import SpoilerButton from './components/spoilerbutton/SpoilerButton'

function App() {


  return (
    <>
      <h2>Spoiler Example (Same component event)</h2>
      <SpoilerButton />
      <h2>Color Picker Example (Pass function to child component)</h2>
      <ColorPicker1 />
      <h2>Color Picker Example (With arguments using anonymous functions)</h2>
      <ColorPicker2 />
    </>
  )
}

export default App
