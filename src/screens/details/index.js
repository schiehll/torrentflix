import React, { Suspense } from 'react'
import Popcorn from 'components/popcorn'
import Loader from 'components/loader'

const Details = ({ location }) => {
  return (
    <Suspense delay={250} fallback={<Loader />}>
      <Popcorn id={location?.state?.imdbID} type={location?.state?.type} />
    </Suspense>
  )
}

export default Details
