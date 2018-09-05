import React from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loader from 'client/components/loader'

export default ({ screen, ...rest }) => (
  <Route
    {...rest}
    component={Loadable({
      loader: () =>
        import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`),
      loading: Loader
    })}
  />
)
