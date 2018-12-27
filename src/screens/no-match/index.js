import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import { PATHS } from 'routes'

const NoMatch = () => (
  <Fragment>
    <h1>No Match</h1>
    <Link to={PATHS.HOME}>home</Link>
  </Fragment>
)

export default NoMatch
