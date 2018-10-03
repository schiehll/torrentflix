import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import loadable from 'loadable-components'
import PageTitle from 'client/components/page-title'
import Loader from 'client/components/loader'

class ScreenRoute extends Component {
  constructor(props) {
    super(props)
    const { screen } = props

    this.timeout = null
    this.state = {
      route: loadable(
        () =>
          import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`),
        {
          render: ({ Component, loading, ownProps }) => {
            if (loading) return null

            return <Component {...ownProps} />
          }
        }
      ),
      pastDelay: false
    }
  }

  static propTypes = {
    screen: PropTypes.string.isRequired,
    title: PropTypes.string,
    delay: PropTypes.number
  }

  static defaultProps = {
    delay: 500
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  getRoute = screen => {
    const { route } = this.state

    if (route.Component === null) {
      this.timeout = setTimeout(() => {
        this.setState({ pastDelay: true })
      }, this.props.delay)
    }

    return route
  }

  render() {
    const { screen, title, ...props } = this.props
    const Route = this.getRoute(screen)
    /**
     * Only shows the loader if the Component takes more than the given delay
     * This way we avoid to flash the loader on fast connections, while still showing it for slow ones
     **/
    const showLoader = this.state.pastDelay && Route.Component === null

    return (
      <Fragment>
        <PageTitle title={title} />
        {showLoader ? <Loader /> : <Route {...props} />}
      </Fragment>
    )
  }
}

export default ScreenRoute
