import { ThemeProvider } from "./context/ThemeProvider"
import { ToggleTheme } from "./components/ToggleTheme"
import "./App.css"

function App() {

  return (
    <>
      <ThemeProvider>
        <ToggleTheme />
      </ThemeProvider>
    </>
  )
}

export default App
