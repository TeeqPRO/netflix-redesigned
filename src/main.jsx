import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('netflix-redesigned-app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
