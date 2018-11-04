import React from 'react'
// import { Switch, Route, BrowserRouter } from 'react-router-dom'
// import PropTypes from 'prop-types'
import styled, { /* ThemeProvider */} from 'styled-components'

import 'normalize.css'
// import theme from '../../styles/theme'

import Header from '../../components/header'

console.log(process.env.APP_NAME)
console.log('WKHP Clientside Dashboard service')

if (module.hot) {
  module.hot.accept()
  console.log('hot module accepted hhm')
}

const AppBackground = styled.div`
  background-color: ${p => p.theme.colors.appBackground};
  position: absolute;
  width: 100%;
  height: 100%;
`

const HeaderBackground = styled.div`
  background-color: ${p => p.theme.colors.headerBackground};
  padding-top: 56px;
`

const Home = () => (
  <div>
    <AppBackground>
      <div>Navigation</div>
      <HeaderBackground>
        <Header title='Welcome' />
      </HeaderBackground>
      <div>content</div>
    </AppBackground>
  </div>
)

export default styled(Home)``