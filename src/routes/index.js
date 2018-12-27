import React from 'react'
import { Router } from '@reach/router'
import ScreenRoute from 'utils/ScreenRoute'

export const PATHS = {
  HOME: '/',
  DETAILS: '/details'
}

const Routes = () => (
  <Router>
    <ScreenRoute key="home" screen="home" path={PATHS.HOME} />
    <ScreenRoute key="details" screen="details" path={PATHS.DETAILS} />
    <ScreenRoute key="no-match" screen="no-match" default />
  </Router>
)

export default Routes
