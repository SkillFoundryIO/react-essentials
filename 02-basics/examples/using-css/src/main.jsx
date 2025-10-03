import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// get the css file from the same directory as the component
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
