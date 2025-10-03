import RectangleCalculatorButton from "./components/RectangleCalculatorButton"
import RectangleCalculatorLive from "./components/ReactangleCalculatorLive"

function App() {
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-5">Rectangle Area Calculators</h1>
        <div className="row">
          <div className="col-md-6">
            <RectangleCalculatorButton />
          </div>
          <div className="col-md-6">
            <RectangleCalculatorLive />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
