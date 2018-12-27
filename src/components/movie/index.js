import React from 'react'

const Movie = ({ data }) => {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default Movie
