import React from 'react'
import './button.style.scss'

const Button = ({ children, ...otherProps }) => (
  <button {...otherProps} className='custom-button'>
    {children}
  </button>
)

export default Button
