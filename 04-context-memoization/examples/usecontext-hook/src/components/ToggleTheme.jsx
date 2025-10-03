import { useTheme } from "../context/ThemeProvider";

export function ToggleTheme() {
  const themeData = useTheme();

  return (
    <div>
      <p>The current theme is: {`${themeData.theme}`}</p>
      <button 
        className={`btn btn-${themeData.theme}`}
        onClick={themeData.toggleTheme}  
      >
        Toggle Theme
      </button>
    </div>
  )
}