import React, { Component } from 'react'
import { Router } from '@reach/router'
import LoadableRoute from 'client/utils/LoadableRoute'

export const PATHS = {
  HOME: '/'
}

class Routes extends Component {
  render() {
    return (
      <Router>
        <LoadableRoute path={PATHS.HOME} screen="home" />
        <LoadableRoute path="*" screen="no-match" />
      </Router>
    )
  }
}

export default Routes
