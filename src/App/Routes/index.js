import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = () => (
  <div>
    Home
  </div>
)

const Account = () => (
  <div>Account</div>
)

const ShowRoom = () => (
  <div>ShowRoom</div>
)

const ForgotPassword = () => (
  <div>ForgotPassword</div>
)

const SignUp = () => (
  <div>SignUp</div>
)

const Routes = () => (
  <Switch>
    <Route path='/account' component={Account} />
    <Route path='/forgot-password' component={ForgotPassword} />
    <Route path='/showroom' component={ShowRoom} />
    <Route path='/signup' component={SignUp} />
    <Route path='/' component={Home} />
  </Switch>
)

export default Routes
