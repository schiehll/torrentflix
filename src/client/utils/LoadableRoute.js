import React, { Component } from 'react'
import loadable from 'loadable-components'
import Loader from 'client/components/loader'

class LoadableRoute extends Component {
  render() {
    const Route = loadable(
      () =>
        import(/* webpackChunkName: "screen-[request]" */ `../screens/${
          this.props.screen
        }`),
      {
        LoadingComponent: Loader
      }
    )

    return <Route />
  }
}

export default LoadableRoute
