import styled, { css } from 'styled-components'

export const List = styled.ul`
  ${({ theme: { spacing } }) => css`
    margin: ${spacing.huge * 2}px 0;
    list-style: none;
    padding: 0;
  `};
`
