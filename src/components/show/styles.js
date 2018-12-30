import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme: { spacing } }) => css`
    margin: ${spacing.huge * 2}px 0;
  `};
`

export const List = styled.ul`
  ${({ theme: { spacing } }) => css`
    margin: ${spacing.huge * 2}px 0;
    list-style: none;
    padding: 0;
  `};
`

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

export const ItemButton = styled(Item)`
  ${({ theme: { colors } }) => css`
    justify-content: space-evenly;
    background-color: transparent;
  `};
`

export const Infos = styled.div`
  ${({ theme: { font } }) => css`
    font-size: 1rem;
    font-weight: ${font.weights.bold};

    > span {
      font-size: 0.8rem;
      font-weight: ${font.weights.normal};
      opacity: 0.5;
    }
  `};
`

export const MultiLineInfos = styled(Infos)`
  ${({ theme: { spacing, font } }) => css`
    display: flex;
    flex-direction: column;

    > span {
      margin-top: ${spacing.base}px;
    }
  `};
`
