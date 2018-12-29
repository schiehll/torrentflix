import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from 'apollo-cache-inmemory'

const httpLink = createHttpLink({ uri: `${process.env.API_URL}/graphql` })

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'INTERFACE',
          name: 'TorrentInfo',
          possibleTypes: [
            {
              name: 'ShowInfoPayload'
            },
            {
              name: 'MovieInfoPayload'
            }
          ]
        }
      ]
    }
  }
})

const client = new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache({ fragmentMatcher })
})

export default client
