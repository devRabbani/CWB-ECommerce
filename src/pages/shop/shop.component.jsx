import React from 'react'
import CollectionsOverviewComponent from '../../components/collectionsOverview/collectionsOverview.component'
import { Route } from 'react-router-dom'
import Collections from '../collections/collections.component'

const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route
      exact
      path={`${match.path}`}
      component={CollectionsOverviewComponent}
    />
    <Route path={`${match.path}/:catid`} component={Collections} />
  </div>
)

export default Shop
