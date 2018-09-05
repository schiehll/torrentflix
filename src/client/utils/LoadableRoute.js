import React from 'react'
import { Route } from 'react-router-dom'
import loadable from 'loadable-components'
import Loader from 'client/components/loader'

export default ({ screen, ...rest }) => (
  <Route
    {...rest}
    component={loadable(
      () =>
        import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`),
      {
        LoadingComponent: Loader
      }
    )}
  />
)
