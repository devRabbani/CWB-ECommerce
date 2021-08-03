import React, { Component } from 'react'
import './signIn.style.scss'
import FormInput from '../form-input/formInput.component'
import Button from '../button/button.component'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setState({
      email: '',
      password: '',
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label='Password'
          />
          <Button type='submit'>Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn
