import 'utils/castSender'
import React from 'react'
import { createRoot } from 'react-dom'
import App from './App'

const root = createRoot(document.getElementById('root'))

const render = Component => {
  root.render(<App />)
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
