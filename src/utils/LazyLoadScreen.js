import { lazy } from 'react'

const LazyLoadScreen = screen =>
  lazy(() =>
    import(/* webpackChunkName: "screen-[request]" */ `../screens/${screen}`)
  )

export default LazyLoadScreen
