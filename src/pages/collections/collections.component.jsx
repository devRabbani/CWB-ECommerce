import React from 'react'
import { connect } from 'react-redux'
import CollectionItemComponent from '../../components/collection-item/collectionItem.component'
import { selectCollection } from '../../redux/shop/shop.selector'
import './collections.style.scss'

const Collections = ({ collection }) => {
  const { title, items } = collection
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItemComponent key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.catid)(state),
})

export default connect(mapStateToProps)(Collections)
