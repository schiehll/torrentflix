import styled, { css } from 'styled-components'

export const SearchInput = styled.input`
  ${({ theme: { font, spacing, radius } }) => css`
    width: 100%;
    padding: ${spacing.small}px;
    font-weight: ${font.weights.bold};
    font-size: 1rem;
    border: none;
    border-radius: ${radius}px;
  `};
`
