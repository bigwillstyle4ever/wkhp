import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// import Header from '../components/header'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'

import Routes from './Routes'
import ServiceLinks from './ServiceLinks'
import AccountLinks from './AccountLinks'

console.log('WKHP Clientside Dashboard service')

const AppBackground = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
`

const App = ({ className }) => (
  <BrowserRouter>
    <AppBackground className={className}>
      <NavBar
        logo={<Logo />}
        title='Willkuerlich'
        primaryNavLinks={<ServiceLinks />}
        secondaryNavLinks={<AccountLinks />}
      />
      <Routes />
    </AppBackground>
  </BrowserRouter>
)

App.propTypes = {
  className: PropTypes.string,
}
App.defaultProps = {
  className: '',
}

export default styled(App)``
