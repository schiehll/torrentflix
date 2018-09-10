import React, { Component, Fragment } from 'react'
import loadable from 'loadable-components'
import Loader from 'client/components/loader'
import PageTitle from 'client/components/page-title'

class ScreenRoute extends Component {
  render() {
    const { screen, title, ...props } = this.props

    const Route = loadable(
      () =>
        import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`),
      {
        LoadingComponent: Loader
      }
    )

    return (
      <Fragment>
        <PageTitle title={title} />
        <Route {...props} />
      </Fragment>
    )
  }
}

export default ScreenRoute
