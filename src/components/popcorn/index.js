import React from 'react'
import { unstable_createResource as createResource } from 'react-cache'
import Movie from 'components/movie'
import Show from 'components/show'

const baseUrl = process.env.POPCORN_URL

const popcornResource = createResource(
  ({ id, type }) => {
    return fetch(`${baseUrl}/${type}/${id}`).then(r => r.json())
  },
  params => params.id
)

const Popcorn = ({ id, type = 'show' }) => {
  const data = popcornResource.read({ id, type })

  if (!data) {
    return (
      <div>
        <span role="img" aria-label="error">
          💔
        </span>{' '}
        Nothing found
      </div>
    )
  }

  if (type === 'show') return <Show data={data} />

  return <Movie data={data} />
}

export default Popcorn
