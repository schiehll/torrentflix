import { generateMedia } from 'styled-media-query'
import theme from 'client/styles/theme'

const media = generateMedia(
  Object.keys(theme.breakpoints).reduce((breakpoints, breakpoint) => {
    breakpoints[breakpoint] = `${theme.breakpoints[breakpoint]}px`

    return breakpoints
  }, {})
)

export default media
