import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ContentContainer = styled.div`
  background: ${p => p.theme.surface};
  box-shadow: ${p => p.theme.boxShadow};
  border-radius: 2px;
  padding: 32px;
`

const Title = styled.h1`
  padding: 20px;
  font-size: 3em;
`

const Content = styled.div`
  padding: 12px 20px;
`

const ContentBox = ({ className, children, title }) => (
  <ContentContainer className={className}>
    <Title>
      {title}
    </Title>
    <Content>
      {children}
    </Content>
  </ContentContainer>
)

ContentBox.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default styled(ContentBox)``
