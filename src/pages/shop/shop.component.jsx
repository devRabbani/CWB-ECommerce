import React, { Component } from 'react'
import shopData from './shop.data'
import PreviewCollection from '../../components/preview-collection/previewCollection.component'

class Shop extends Component {
  state = {
    collections: shopData,
  }
  render() {
    return (
      <div className='shop-page'>
        {this.state.collections.map(({ id, ...otherProps }) => (
          <PreviewCollection key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default Shop
