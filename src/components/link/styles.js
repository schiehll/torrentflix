import styled, { css } from 'styled-components'
import { Link as RouteLink } from '@reach/router'

export const Link = styled(RouteLink)`
  ${({ theme: { colors } }) => css`
    text-decoration: none;
    color: ${colors.white};
  `};
`
