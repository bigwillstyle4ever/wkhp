import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseFooter from '../../../components/Footer'

const Footer = styled(BaseFooter)`
  background: ${p => p.theme.primary};
  min-height: 24px;
  transition: 200ms;
  &:hover {
    box-shadow: ${p => p.theme.boxShadowDark};
  }
`

const AppFooter = ({className}) => (
  <Footer className={className}>
    Optional footer
  </Footer>
)

AppFooter.propTypes = {
  className: PropTypes.string.isRequired
}

export default styled(AppFooter)``
