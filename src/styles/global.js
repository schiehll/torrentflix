import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`${({ theme: { font, colors } }) => css`
  body {
    font-family: ${font.family};
    font-size: ${font.sizes.default}px;
    font-weight: ${font.weights.normal};
    padding: 0;
    color: ${colors.white};
    background-color: ${colors.bg};
    width: 320px;
    margin: 0 auto;
}
  }

  * {
    box-sizing: border-box;
  }
`}`

export default GlobalStyles
