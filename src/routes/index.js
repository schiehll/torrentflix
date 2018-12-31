import React, { Suspense } from 'react'
import { Router } from '@reach/router'
import LazyLoadScreen from 'utils/LazyLoadScreen'
import PageLoader from 'components/page-loader'

export const PATHS = {
  HOME: '/',
  DETAILS: '/details',
  NO_MATCH: '*'
}

const screens = preval`
  const fs = require('fs')
  const path = require('path')
  module.exports = fs.readdirSync(path.resolve(__dirname, '../screens'))
`

const Routes = () => (
  <Suspense maxDuration={500} fallback={<PageLoader />}>
    <Router>
      {screens.map(screen => {
        const Screen = LazyLoadScreen(screen)
        const path = PATHS[screen.replace(/-/, '_').toUpperCase()]

        if (!path) return null
        return <Screen key={screen} path={path} default={path === '*'} />
      })}
    </Router>
  </Suspense>
)

export default Routes
