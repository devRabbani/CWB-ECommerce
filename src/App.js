import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'

import Header from './components/header/header.component'

import SignInSignUp from './pages/signIn-signUp-page/signIn-signUp.component'

import { auth } from './firebase/firebase.util'

class App extends Component {
  state = {
    currentUser: null,
  }

  unSubscribeFromAuth = null
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
