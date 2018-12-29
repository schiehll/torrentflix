import React from 'react'
import { Link } from '@reach/router'
import { useQuery } from 'react-apollo-hooks'
import SEARCH from 'graphql/queries/search'
import Message from 'components/message'

const Search = ({ title }) => {
  const { data, error } = useQuery(SEARCH, {
    variables: { input: { title } }
  })

  if (error) {
    return (
      <Message
        emoji="💔"
        text={
          <span>
            Oops, nothing found! <br /> (or maybe there's an error)
          </span>
        }
      />
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
