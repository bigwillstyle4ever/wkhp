import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseLink from '../Link'

const StyledLink = styled(BaseLink)`
  display: flex;
`

const NavContainer = styled.div`
  margin: ${p => p.theme.viewportMargin};
  display: flex;
  align-content: flex-start;
  align-self: center;
  flex-flow: row;
  height: 56px;
  width: 100%;
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
  div {
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
    <StyledLink to='/'>
      <LogoContainer>
        {logo}
      </LogoContainer>
      <Title>
        <div>
          {title}
        </div>
      </Title>
    </StyledLink>
    <PriNavElements>
      {primaryNavLinks}
    </PriNavElements>
    <SecNavElements>
      {secondaryNavLinks}
    </SecNavElements>
  </NavContainer>
)

NavBar.propTypes = {
  className: PropTypes.string.isRequired,
  logo: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  primaryNavLinks: PropTypes.node.isRequired,
  secondaryNavLinks: PropTypes.node.isRequired
}

export default styled(NavBar)``
