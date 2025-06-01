import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app.tsx'

import '@radix-ui/themes/styles.css'
import 'virtual:uno.css'

import './styles/font.css'

// eslint-disable-next-line @masknet/no-top-level
createRoot(document.getElementById('root') as HTMLCanvasElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
