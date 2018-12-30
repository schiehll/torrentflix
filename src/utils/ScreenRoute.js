import React, { lazy, Suspense } from 'react'
import Loader from 'components/loader'
import styled from 'styled-components'

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ScreenRoute = ({ screen, ...props }) => {
  const Route = lazy(() =>
    import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`)
  )

  return (
    <Suspense
      maxDuration={500}
      fallback={
        <LoaderWrapper>
          <Loader size="big" />
        </LoaderWrapper>
      }
    >
      <Route {...props} />
    </Suspense>
  )
}

export default ScreenRoute
