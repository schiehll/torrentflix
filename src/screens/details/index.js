import React, { Suspense } from 'react'
import Torrent from 'components/torrent'
import PageLoader from 'components/page-loader'

const Details = ({ location }) => {
  return (
    <Suspense maxDuration={2000} fallback={<PageLoader />}>
      <Torrent imdbID={location?.state?.imdbID} type={location?.state?.type} />
    </Suspense>
  )
}

export default Details
