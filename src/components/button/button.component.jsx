import React from 'react'
import './button.style.scss'

const Button = ({ children, isGoogleSignin, ...otherProps }) => (
  <button
    {...otherProps}
    className={`${isGoogleSignin ? 'google-sign-in' : ''} custom-button`}
  >
    {children}
  </button>
)

export default Button
