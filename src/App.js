import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

// Components
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInSignUp from './pages/signIn-signUp-page/signIn-signUp.component'

// Auth firbase
import { auth, createUserDocument } from './firebase/firebase.util'

// Redux
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends Component {
  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth)

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }

  render() {
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
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
