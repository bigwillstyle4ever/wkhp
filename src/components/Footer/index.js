import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
`

const Footer = ({ className, children }) => (
  <FooterContainer className={className}>
    {children}
  </FooterContainer>
)

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
Footer.defaultProps = {
  className: '',
  children: {}
}

export default styled(Footer)``
