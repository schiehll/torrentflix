import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import LoadableRoute from 'utils/LoadableRoute'

export const PATHS = {
  HOME: '/'
}

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <LoadableRoute exact path={PATHS.HOME} screen="home" />
          <LoadableRoute path="*" screen="no-match" />
        </Switch>
      </Router>
    )
  }
}

export default Routes
