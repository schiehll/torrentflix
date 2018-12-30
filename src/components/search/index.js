import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import SEARCH from 'graphql/queries/search'
import emptyImg from 'images/empty.png'
import Message from 'components/message'
import Link from 'components/link'
import * as S from './styles'

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
    <S.Result>
      <Link
        to="/details"
        state={{
          imdbID: result.imdbID,
          type: result.type
        }}
      >
        <S.Box>
          <S.Cover poster={result.poster || emptyImg}>
            <S.Title>
              {result.title}
              <br />
              <S.Year>{`🗓  ${result.year}`}</S.Year>
            </S.Title>
          </S.Cover>
        </S.Box>
      </Link>
    </S.Result>
  )
}

export default Search
