import React, { Suspense } from 'react'
import Torrent from 'components/torrent'
import Loader from 'components/loader'

const Details = ({ location }) => {
  return (
    <Suspense maxDuration={500} fallback={<Loader />}>
      <Torrent imdbID={location?.state?.imdbID} type={location?.state?.type} />
    </Suspense>
  )
}

export default Details
