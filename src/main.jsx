import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/global.scss' //공통css (font, base)
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
