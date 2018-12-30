import React, { lazy, Suspense } from 'react'
import PageLoader from 'components/page-loader'

const ScreenRoute = ({ screen, ...props }) => {
  const Route = lazy(() =>
    import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`)
  )

  return (
    <Suspense maxDuration={500} fallback={<PageLoader />}>
      <Route {...props} />
    </Suspense>
  )
}

export default ScreenRoute
