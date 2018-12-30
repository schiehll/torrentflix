import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme: { spacing } }) => css`
    margin: ${spacing.huge * 2}px 0;
  `};
`
