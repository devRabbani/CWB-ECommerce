import React from 'react'
import './homepage.style.scss'
import Directory from '../../components/directory/directory.component'
import { Route, Switch } from 'react-router-dom'

const homepage = () => {
  return (
    <div className='homepage'>
      <Switch>
        <Route exact path='/' component={Directory} />
        <Route exact path='/hats' component={Directory} />
      </Switch>
    </div>
  )
}

export default homepage
