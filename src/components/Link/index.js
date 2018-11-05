import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as L } from 'react-router-dom';

const Link = styled(L)`
  color: #f00;
`

const BaseLink = ({ className, to, children }) => (
  <Link className={className} to={to}>
    {children}
  </Link>
)

BaseLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default styled(BaseLink)``
