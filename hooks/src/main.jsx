import './main.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './views/app'


createRoot(
  document.getElementById('root')
)
  .render(
    <App />
  )