import styled, { css } from 'styled-components'

export const Logo = styled.h1`
  ${({ theme: { spacing } }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
  `};
`

export const Emoji = styled.span`
  ${({ theme: { spacing } }) => css`
    margin-right: ${spacing.small}px;
  `};
`
