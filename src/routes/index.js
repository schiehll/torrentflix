import React from 'react'
import { Router } from '@reach/router'
import ScreenRoute from 'utils/ScreenRoute'

export const PATHS = {
  HOME: '/'
}

const Routes = () => (
  <Router>
    <ScreenRoute key="home" screen="home" title="App" path={PATHS.HOME} />
    <ScreenRoute
      key="no-match"
      screen="no-match"
      title="App - No match"
      default
    />
  </Router>
)

export default Routes
