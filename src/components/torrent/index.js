import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import Movie from 'components/movie'
import Show from 'components/show'
import SHOW_INFO from 'graphql/queries/showInfo'
import MOVIE_INFO from 'graphql/queries/movieInfo'

const Torrent = ({ imdbID, type }) => {
  const { data, error } = useQuery(type === 'SHOW' ? SHOW_INFO : MOVIE_INFO, {
    variables: { input: { imdbID } }
  })

  if (error) {
    return (
      <div>
        <span role="img" aria-label="error">
          💔
        </span>{' '}
        Nothing found
      </div>
    )
  }

  if (type === 'SHOW') return <Show data={data.showInfo} />

  return <Movie data={data.movieInfo} />
}

export default Torrent
