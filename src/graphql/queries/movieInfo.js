import gql from 'graphql-tag'

export default gql`
  query MovieInfo($input: TorrentInfoInput!) {
    movieInfo(input: $input) {
      title
      poster
      synopsis
      year
      type
      torrents {
        url
        quality
        seeds
        peers
        provider
      }
    }
  }
`
