import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import Routes from 'routes'

const App = () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  </ThemeProvider>
)

export default App
