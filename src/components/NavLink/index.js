import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink as NL } from 'react-router-dom';

const activeClassName = 'active';

const NavLink = styled(NL).attrs({
  activeClassName
})`
  &.${activeClassName} {
    color: ${p => p.theme.textInverse};

  }
  &:not(.${activeClassName}) {
    color: ${p => p.theme.secondary};
  }
  &:hover {
    color: '#f00';
  }
`

const NavElement = ({ className, to, value }) => (
  <NavLink className={className} to={to}>
    {value}
  </NavLink>
)

NavElement.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  value: PropTypes.string,
}
NavElement.defaultProps = {
  className: '',
  to: '',
  value: '',
}

export default styled(NavElement)``
