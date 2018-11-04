import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import svglogo from '../../assets/img/logo.svg'

const Logo = ({ className }) => (
  <div className={className}>
    { /* eslint-disable-next-line */ }
    { /*<img src={require('../../assets/img/logo.svg')} alt='App Logo' /> */}
    <div alt='App Logo' dangerouslySetInnerHTML={{__html: svglogo}} />
  </div>
)

Logo.propTypes = {
  className: PropTypes.string,
}
Logo.defaultProps = {
  className: '',
}

export default styled(Logo)``
