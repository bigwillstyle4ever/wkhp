import React from 'react'
import styled from 'styled-components'

import Logo from '../../../components/Logo'
import NavBar from '../../../components/NavBar'

import AccountLinks from '../../AccountLinks'
import PageLinks from '../../PageLinks'

const StyledNavBar = styled(NavBar)`
`

const AppNavBar = () => (
  <StyledNavBar
    logo={<Logo />}
    title={<span>Willkuerlich</span>}
    primaryNavLinks={<PageLinks />}
    secondaryNavLinks={<AccountLinks />}
  />
)

export default AppNavBar
