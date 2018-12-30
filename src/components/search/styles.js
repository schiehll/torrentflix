import styled, { css } from 'styled-components'

export const Result = styled.ul`
  list-style: none;
  margin-top: 50px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Box = styled.li`
  ${({ theme: { spacing, radius, colors } }) => css`
    border: 1px solid ${colors.darkblue};
    border-radius: ${radius}px;
    background-color: ${colors.deepblue};
    padding: ${spacing.medium}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 280px;
  `};
`

export const Cover = styled.div`
  ${({ theme: { radius, colors }, poster }) => css`
    border: 1px solid ${colors.darkblue};
    border-radius: ${radius}px;
    width: 250px;
    height: 400px;
    background: url(${poster});
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
    display: flex;
    flex-direction: column-reverse;
  `};
`

export const Title = styled.div`
  ${({ theme: { spacing, font } }) => css`
    font-size: 1.5rem;
    padding: ${spacing.small}px;
    font-weight: ${font.weights.bold};
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
  `};
`

export const Year = styled.span`
  ${({ theme: { spacing } }) => css`
    margin-top: ${spacing.small}px;
  `};
`
