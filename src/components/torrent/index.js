import React, { Fragment } from 'react'
import { useQuery } from 'react-apollo-hooks'
import Movie from 'components/movie'
import Show from 'components/show'
import SHOW_INFO from 'graphql/queries/showInfo'
import MOVIE_INFO from 'graphql/queries/movieInfo'
import Message from 'components/message'
import Logo from 'components/logo'

const Torrent = ({ imdbID, type }) => {
  const { data, error } = useQuery(type === 'SHOW' ? SHOW_INFO : MOVIE_INFO, {
    variables: { input: { imdbID } }
  })

  if (error) {
    return (
      <Fragment>
        <Logo />
        <Message emoji="💔" text="nothing found, sorry" />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Logo />
      {type === 'SHOW' ? (
        <Show show={data.showInfo} />
      ) : (
        <Movie movie={data.movieInfo} />
      )}
    </Fragment>
  )
}

export default Torrent
