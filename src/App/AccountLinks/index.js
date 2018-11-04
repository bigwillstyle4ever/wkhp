import React, { Fragment } from 'react'

import NavLink from '../../components/NavLink'

const AccountLinks = () => (
  <Fragment>
    <NavLink to='/account' value='Account' />
    <NavLink to='/signup' value='Sign up' />
  </Fragment>
)

export default AccountLinks
