import styled, { css } from 'styled-components'

export const Item = styled.li`
  ${({ theme: { spacing, colors, radius } }) => css`
    border: 1px solid ${colors.darkblue};
    border-radius: ${radius}px;
    background-color: ${colors.deepblue};
    padding: ${spacing.medium}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    margin: ${spacing.medium}px 0;
    cursor: pointer;
  `};
`
