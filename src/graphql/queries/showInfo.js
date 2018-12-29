import gql from 'graphql-tag'

export default gql`
  query ShowInfo($input: TorrentInfoInput!) {
    showInfo(input: $input) {
      title
      poster
      synopsis
      year
      type
      seasons {
        id
        episodes {
          id
          title
          overview
          date
          torrents {
            url
            quality
            seeds
            peers
            provider
          }
        }
      }
    }
  }
`
