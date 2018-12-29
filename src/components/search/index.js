import React from 'react'
import { Link } from '@reach/router'
import { useQuery } from 'react-apollo-hooks'
import SEARCH from 'graphql/queries/search'

const Search = ({ title }) => {
  const { data, error } = useQuery(SEARCH, {
    variables: { input: { title } }
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

  const { search: result } = data

  return (
    <Link
      to="/details"
      state={{
        imdbID: result.imdbID,
        type: result.type
      }}
    >
      <img src={result.poster} alt={result.title} />
    </Link>
  )
}

export default Search
