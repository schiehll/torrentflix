import React, { lazy, Suspense } from 'react'
import Loader from 'components/loader'

const ScreenRoute = ({ screen, ...props }) => {
  const Route = lazy(() =>
    import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`)
  )

  return (
    <Suspense delay={1500} fallback={<Loader />}>
      <Route {...props} />
    </Suspense>
  )
}

export default ScreenRoute
