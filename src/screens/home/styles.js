import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme: { spacing } }) => css`
    width: 100%;
    display: flex;
    justify-content: center;

    > span {
      margin-right: ${spacing.small}px;
    }
  `};
`

export const SearchInput = styled.input`
  ${({ theme: { font, spacing } }) => css`
    width: 100%;
    padding: ${spacing.small}px;
    font-weight: ${font.weights.bold};
    font-size: 1rem;
  `};
`
