import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`${({ theme: { font, colors } }) => css`
  body {
    font-family: ${font.family};
    font-size: ${font.sizes.default}px;
    font-weight: ${font.weights.normal}px;
    margin: 0;
    padding: 0;
    color: ${colors.black};
  }

  * {
    box-sizing: border-box;
  }
`}`

export default GlobalStyles
