import React from 'react'
import styled, { css } from 'styled-components'
import rotate from 'styles/animations/rotate'

const Spinner = styled.div`
  ${({ size }) => css`
    display: inline-block;
    font-size: ${size === 'big' ? 3.5 : 2}rem;
    animation: ${rotate} 2s linear infinite;
  `};
`

const Loader = ({ size = 'medium' }) => <Spinner size={size}>🌀</Spinner>

export default Loader
