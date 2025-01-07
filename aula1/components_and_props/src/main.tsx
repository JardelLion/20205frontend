import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './components/Greeting'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Greeting name='Jardel' idade='20'/>
  </StrictMode>,
)
