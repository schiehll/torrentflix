import React from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from 'components/loader'

export default ({ screen, ...rest }) => (
  <Route
    {...rest}
    component={Loadable({
      loader: () => import(`../screens/${screen}`),
      loading: Loader
    })}
  />
)
