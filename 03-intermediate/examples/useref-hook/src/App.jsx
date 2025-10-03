import DomValue from "./components/DomValue"
import RefValue from "./components/RefValue"

function App() {
  return (
    <>
      <div className="row mt-4 mb-2">
        <h1>useRef Code Samples</h1>
        <p>These two components demonstrate the useRef hook.</p>
      </div>
      <div className="row mb-2">
        <h2>useRef with a value</h2>
        <p>We can use the hook to persist a mutable value across re-renders.</p>
        <RefValue />
      </div>
      <div className="row mb-2">
        <h2>useRef with a DOM element (input)</h2>
        <p>The hook can also persist a reference to a DOM element, like a form input.</p>
        <DomValue />
      </div>
    </>
  )
}

export default App
