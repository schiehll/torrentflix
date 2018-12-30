import styled, { css } from 'styled-components'
import rotate from 'styles/animations/rotate'

export const Spinner = styled.div`
  ${({ size }) => css`
    display: inline-block;
    font-size: 3.5rem;
    animation: ${rotate} 2s linear infinite;
  `};
`
