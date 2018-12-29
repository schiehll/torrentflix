import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({ uri: `${process.env.API_URL}/graphql` })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default client
