import styled, { css } from 'styled-components'

export const Message = styled.div`
  ${({ theme: { font, spacing } }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: ${font.weights.bold};
    margin-top: ${spacing.huge * 4}px;
    text-align: center;
  `};
`

export const MessageEmoji = styled.div`
  ${({ theme: { spacing } }) => css`
    font-size: 3.5rem;
    margin-bottom: ${spacing.small}px;
  `};
`
