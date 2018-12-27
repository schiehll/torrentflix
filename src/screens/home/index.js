import React, { Fragment } from 'react'
import { Link } from '@reach/router'

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <Link to="/no-match">no match</Link>
  </Fragment>
)

export default Home
