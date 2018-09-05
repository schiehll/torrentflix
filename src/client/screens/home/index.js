import React, { Component, Fragment } from 'react'
import { Link } from '@reach/router'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home</h1>
        <Link to="/no-match">no match</Link>
      </Fragment>
    )
  }
}

export default Home
