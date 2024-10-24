import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyle from './assets/styles/GlobalStyle.ts'
import Reset from './assets/styles/Reset.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </StrictMode>,
)
