import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

if (module.hot) {
  module.hot.accept()
  console.log('hot module accepted hhm')
}

console.log(process.env.APP_NAME)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
