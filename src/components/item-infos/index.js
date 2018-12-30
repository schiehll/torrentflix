import styled, { css } from 'styled-components'

export const ComplementaryInfo = styled.span`
  ${({ theme: { font } }) => css`
    font-size: 0.8rem;
    font-weight: ${font.weights.normal};
    opacity: 0.5;
  `};
`

export const Infos = styled.div`
  ${({ theme: { font } }) => css`
    font-size: 1rem;
    font-weight: ${font.weights.bold};
  `};
`

export const MultiLineInfos = styled(Infos)`
  ${({ theme: { spacing, font } }) => css`
    display: flex;
    flex-direction: column;

    ${ComplementaryInfo} {
      margin-top: ${spacing.base}px;
    }
  `};
`
