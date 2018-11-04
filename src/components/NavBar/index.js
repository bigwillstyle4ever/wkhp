import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavContainer = styled.div`
  background: ${p => p.theme.primary};
  padding: ${p => p.theme.viewSidePadding};
  display: flex;
  align-content: flex-start;
  flex-flow: row;
  height: 56px;
`
const LogoContainer = styled.div`
  color: ${p => p.theme.brand};
  width: 36px;
  height: 36px;
  padding: 8px;
  margin: auto;
`
const PriNavElements = styled.div`
  color: ${p => p.theme.textInverse};
  display: flex;
  flex-grow: 1;
  padding: 8px 8px 8px 100px;

  * {
    padding: 8px;
    align-self: center;
  }
`
const SecNavElements = styled.div`
  color: ${p => p.theme.textInverse};
  display: flex;
  flex-grow: 0;
  padding: 8px;

  * {
    padding: 8px;
    align-self: center;
  }
`
const Title = styled.div`
  color: ${p => p.theme.brand};
  padding: 8px;
  display: flex;
  h2 {
    align-self: center;
  }
`

const NavBar = ({
  className,
  logo,
  title,
  primaryNavLinks,
  secondaryNavLinks
}) => (
  <NavContainer className={className}>
    <LogoContainer>
      {logo}
    </LogoContainer>
    <Title>
      <h2>{title}</h2>
    </Title>
    <PriNavElements>
      {primaryNavLinks}
    </PriNavElements>
    <SecNavElements>
      {secondaryNavLinks}
    </SecNavElements>
  </NavContainer>
)

NavBar.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.object,
  title: PropTypes.string,
  primaryNavLinks: PropTypes.element,
  secondaryNavLinks: PropTypes.element
}
NavBar.defaultProps = {
  className: '',
  logo: {},
  title: '',
  primaryNavLinks: {},
  secondaryNavLinks: {}
}

export default styled(NavBar)``
