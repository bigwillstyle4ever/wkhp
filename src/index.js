import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider /* , injectGlobal */ } from 'styled-components'

import 'normalize.css'
// import './styles/globalStyle'
import theme from './styles/theme'

import App from './App'

if (module.hot) {
  module.hot.accept()
  console.log('hot module accepted hhm')
}

console.log(process.env.APP_NAME)
console.log(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
)

// // eslint-disable-next-line
// injectGlobal`
//   body {
//     background-color: ghostwhite;
//     padding: 0;
//     margin: 0;
//     font-family: cursive;
//   }
// `
