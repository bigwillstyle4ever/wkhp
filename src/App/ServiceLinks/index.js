import React, { Fragment } from 'react'

import NavLink from '../../components/NavLink'

const ServiceLinks = () => (
  <Fragment>
    <NavLink to='/showroom' value='ShowRoom' />
    <NavLink to='/account' value='Service 1' />
    <NavLink to='/signup' value='Service 2' />
  </Fragment>
)

export default ServiceLinks
