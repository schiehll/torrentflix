import React from 'react'

const Movie = ({ movie }) => {
  return <pre>{JSON.stringify(movie, null, 2)}</pre>
}

export default Movie
