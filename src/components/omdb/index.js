import React from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import { Link } from '@reach/router'

const baseUrl = `${process.env.OMDB_URL}/?apikey=${process.env.OMDB_API_KEY}&t=`

const omdbResource = createResource(title => {
  return fetch(`${baseUrl}${encodeURIComponent(title.trim())}`).then(r =>
    r.json()
  )
})

const OMDB = ({ title }) => {
  const data = omdbResource.read(title)

  if (data.Error) {
    return (
      <div>
        <span role="img" aria-label="error">
          💔
        </span>{' '}
        Nothing found
      </div>
    )
  }

  return (
    <Link
      to="/details"
      state={{
        imdbID: data.imdbID,
        type: data.Type === 'movie' ? data.Type : 'show'
      }}
    >
      <img src={data.Poster} alt={data.Title} />
    </Link>
  )
}

export default OMDB
