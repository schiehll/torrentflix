import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
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
