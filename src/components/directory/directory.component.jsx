import React from 'react'
import { connect } from 'react-redux'
import MenuItem from '../menuItem/menuItem.component'

import { selectDirectorySections } from '../../redux/directory/directory.selector'
import './directory.style.scss'
import { createStructuredSelector } from 'reselect'

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherProps }) => {
      return <MenuItem key={id} {...otherProps} />
    })}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
