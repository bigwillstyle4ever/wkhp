import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// background: ${p => p.theme.surface};
// not elegant => to todo
const Fullscreen = styled.div`
  width: 70vw;
  margin-bottom: 60px;
`

const FullscreenWrapper = ({ className, children }) => (
  <Fullscreen className={className}>
    {children}
  </Fullscreen>
)

FullscreenWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default styled(FullscreenWrapper)``
