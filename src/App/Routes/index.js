import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Account from '../../pages/Account'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import PasswordLost from '../../pages/PasswordLost'
import Service1 from '../../pages/Service1'
import Service2 from '../../pages/Service2'
import Showroom from '../../pages/Showroom'
import SignUp from '../../pages/Signup'

const Routes = () => (
  <Switch>
    <Route path='/account' component={Account} />
    <Route path='/login' component={Login} />
    <Route path='/password-lost' component={PasswordLost} />
    <Route path='/service1' component={Service1} />
    <Route path='/service2' component={Service2} />
    <Route path='/showroom' component={Showroom} />
    <Route path='/signup' component={SignUp} />
    <Route path='/' component={Home} />
  </Switch>
)

export default Routes
