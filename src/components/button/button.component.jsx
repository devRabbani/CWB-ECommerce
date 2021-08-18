import React from 'react'
import './button.style.scss'

const Button = ({ children, isGoogleSignin, inverted, ...otherProps }) => (
  <button
    {...otherProps}
    className={`${inverted ? 'inverted' : ' '} ${
      isGoogleSignin ? 'google-sign-in' : ''
    } custom-button`}
  >
    {children}
  </button>
)

export default Button
