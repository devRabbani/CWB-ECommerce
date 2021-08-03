import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'

import Header from './components/header/header.component'

import SignInSignUp from './pages/signIn-signUp-page/signIn-signUp.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  )
}

export default App
