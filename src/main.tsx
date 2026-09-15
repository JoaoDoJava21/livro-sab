import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './styles/tokens.css'
import './styles/base.css'
import './styles/book.css'
import './styles/cover.css'
import './styles/scenes.css'
import './styles/ui.css'

const raiz = document.getElementById('root')
if (raiz) {
  createRoot(raiz).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
