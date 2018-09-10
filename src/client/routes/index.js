import React, { Component } from 'react'
import { Router } from '@reach/router'
import ScreenRoute from 'client/utils/ScreenRoute'

export const PATHS = {
  HOME: '/'
}

class Routes extends Component {
  render() {
    return (
      <Router>
        <ScreenRoute path={PATHS.HOME} screen="home" title="App" />
        <ScreenRoute path="*" screen="no-match" title="App - No match" />
      </Router>
    )
  }
}

export default Routes
