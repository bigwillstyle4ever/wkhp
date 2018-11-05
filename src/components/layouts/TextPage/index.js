import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextContainer = styled.div`
  background: ${p => p.theme.surface};
  padding: 40px;
  h1 {
    padding: 20px;
  }
  h2 {
    padding: 20px 40px;
  }
  h3 {
    padding: 8px 60px;
  }
  p {
    padding: 8px 60px;
  }
`

const TextPage = ({ className, children }) => (
  <TextContainer className={className}>
    {children}
  </TextContainer>
)

TextPage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
TextPage.defaultProps = {
  className: '',
  children: {}
}

export default styled(TextPage)``
