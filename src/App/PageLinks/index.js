import React, { Fragment } from 'react'

import NavLink from '../../components/NavLink'

const PageLinks = () => (
  <Fragment>
    <NavLink to='/showroom' value='Showroom' />
    <NavLink to='/service1' value='Service 1' />
    <NavLink to='/service2' value='Service 2' />
  </Fragment>
)

export default PageLinks
