import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "modern-normalize"
import './index.css'
import App from './components/App'


createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
); 
