import React, { Component, Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'client/styles/theme'
import GlobalStyles from 'client/styles/global'
import Routes from 'client/routes'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          <Routes />
        </Fragment>
      </ThemeProvider>
    )
  }
}

export default App
