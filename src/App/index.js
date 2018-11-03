import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
// import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import 'normalize.css'
import theme from '../styles/theme'

import Header from '../components/header'

console.log('WKHP Clientside Dashboard service')

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

const Account = () => (
  <div>Account</div>
)

const ForgotPassword = () => (
  <div>ForgotPassword</div>
)

const SignUp = () => (
  <div>SignUp</div>
)

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <div>hallo</div>
      <Switch>
        <Route path='/account' component={Account} />
        <Route path='/forgot-password' component={ForgotPassword} />
        <Route path='/signup' component={SignUp} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

export default App;
