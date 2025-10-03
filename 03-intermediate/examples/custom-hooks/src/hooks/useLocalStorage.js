import { useState, useEffect } from 'react'

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      setValue(item ? JSON.parse(item) : defaultValue);
    } catch (err) {
      console.error(`Error reading ${key} from localStorage:`, err);
      setValue(defaultValue);
    }
  }, []);

  function setStoredValue(newValue) {
    try {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {
      console.error(`Error saving ${key} to localStorage:`, err);
    }
  };

  return [value, setStoredValue];
}