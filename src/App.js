import 'vendor/castFramework'
import 'vendor/castSender'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from 'react-apollo-hooks'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import Routes from 'routes'
import client from 'graphql/client'

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
        <Routes />
      </Fragment>
    </ThemeProvider>
  </ApolloProvider>
)

export default App
