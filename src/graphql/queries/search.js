import gql from 'graphql-tag'

export default gql`
  query Search($input: SearchInput!) {
    search(input: $input) {
      imdbID
      type
      title
      poster
      year
    }
  }
`
