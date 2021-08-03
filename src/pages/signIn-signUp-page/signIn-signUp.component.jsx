import React from 'react'
import './signIn-signUp.style.scss'
import SignIn from '../../components/signIn/signIn.component'
import Signup from '../../components/signup/signup.component'

const SignInSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <Signup />
  </div>
)

export default SignInSignUp
