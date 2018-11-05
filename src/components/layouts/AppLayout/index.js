import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AppBackground = styled.div`
  background: ${props => props.theme.background};
  width: 100%;
  height: 100%;
`

const AppLayout = ({
  className,
  layoutBlueprint: Layout,
  nav,
  routes,
  footer
}) => (
  <AppBackground className={className}>
    <Layout
      nav={nav}
      routes={routes}
      footer={footer}
    />
  </AppBackground>
)

AppLayout.propTypes = {
  className: PropTypes.string,
  footer: PropTypes.instanceOf(Object),
  layoutBlueprint: PropTypes.instanceOf(Object),
  nav: PropTypes.instanceOf(Object),
  routes: PropTypes.instanceOf(Object)
}
AppLayout.defaultProps = {
  className: '',
  footer: {},
  layoutBlueprint: {},
  nav: {},
  routes: {}
}

export default styled(AppLayout)``
