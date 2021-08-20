import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsPreview } from '../../redux/shop/shop.selector'

import PreviewCollection from '../preview-collection/previewCollection.component'
import './collectionOverview.style.scss'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collection-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
})

export default connect(mapStateToProps)(CollectionsOverview)
