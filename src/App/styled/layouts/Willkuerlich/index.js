import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AppLayout = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 100%;
  min-height: 100vh;
`

const NavArea = styled.div`
  background: ${p => p.theme.primary};
  box-shadow: ${p => p.theme.boxShadow};
  display: flex;
  overlay: auto;
  width: 100%;
`

const ContentArea = styled.div`
  display: flex;
  flex-grow: 1;
  margin: ${p => p.theme.viewportMargin};
  margin-top: 24px;
  margin-bottom: 24px;
`

const Layout = ({
  className,
  nav: Navbar,
  routes: Routes,
  footer: Footer
}) => (
  <AppLayout className={className}>
    <NavArea>
      <Navbar />
    </NavArea>
    <ContentArea>
      <Routes />
    </ContentArea>
    {Footer && <Footer />}
  </AppLayout>
)

Layout.propTypes = {
  className: PropTypes.string.isRequired,
  footer: PropTypes.instanceOf(Object),
  nav: PropTypes.instanceOf(Object).isRequired,
  routes: PropTypes.instanceOf(Object).isRequired
}
Layout.defaultProps = {
  footer: {},
}

export default styled(Layout)``
