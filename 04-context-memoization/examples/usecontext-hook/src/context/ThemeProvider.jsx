import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.classList.remove('light-theme', 'dark-theme');

    document.body.classList.add(`${theme}-theme`);
  }, [theme]);

  function toggleTheme() {
    setTheme(current => {
      return current === 'light' ? 'dark' : 'light';
    });
  }

  const data = {theme, toggleTheme, isLight: theme==="light"}

  return (
    <ThemeContext.Provider value={data}>
      {children}
    </ThemeContext.Provider>
  )
}