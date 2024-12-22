// import './index.css'
// import ReactDOM from 'react-dom'
// import React from 'react'

// import App from './views/App'

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

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