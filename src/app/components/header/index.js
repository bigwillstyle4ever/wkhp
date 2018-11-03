import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Background = styled.div`
  ${p => p.theme.color}
  background-color: #222;
  height: 150px;
  padding: 20px;
`
const Header = ({ title }) => (
  <Background>
    <h1>{title}</h1>
  </Background>
)

Header.propTypes = {
  title: PropTypes.string
}
Header.defaultProps = {
  title: 'A simple header'
}

export default Header
