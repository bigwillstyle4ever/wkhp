import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled, { ThemeProvider /* , injectGlobal */ } from 'styled-components'

import AppLayout from '../components/layouts/AppLayout'
import StyledAppLayout from './styled/layouts/Willkuerlich'

import AppNavBar from './styled/AppNavBar'
import AppFooter from './styled/AppFooter'

import Routes from './Routes'

import 'normalize.css'
// import './styled/styles/globalStyle' // can't get it to work
import theme from './styled/styles/theme'

/* alternative to using global style injection =>
how to manipulate specific components from here? */
const AppContainer = styled.div`
  a {
    text-decoration: none;
  }
`

console.log('-- WKHP Clientside Dashboard service --')
console.log(process.env.APP_NAME)
console.log('-- Theme: ', theme, ' --');

const App = ({ className }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppContainer className={className}>
        <AppLayout
          layoutBlueprint={StyledAppLayout}
          nav={AppNavBar}
          routes={Routes}
          footer={AppFooter}
        />
      </AppContainer>
    </ThemeProvider>
  </BrowserRouter>
)

App.propTypes = {
  className: PropTypes.string,
}
App.defaultProps = {
  className: '',
}

export default styled(App)``
