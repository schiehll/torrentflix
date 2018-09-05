import React, { Component, Fragment } from 'react'
import { Link } from '@reach/router'
import { PATHS } from 'client/routes'

class NoMatch extends Component {
  render() {
    return (
      <Fragment>
        <h1>No Match</h1>
        <Link to={PATHS.HOME}>home</Link>
      </Fragment>
    )
  }
}

export default NoMatch
