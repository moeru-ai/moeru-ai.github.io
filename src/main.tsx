import { setPreferredColorScheme } from '@react-three/uikit'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'

import './styles.css'

setPreferredColorScheme('system')

createRoot(document.getElementById('root') as HTMLCanvasElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
