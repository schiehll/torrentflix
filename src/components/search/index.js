import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import SEARCH from 'graphql/queries/search'
import Message from 'components/message'
import emptyImg from 'images/empty.png'
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
      <S.Link
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
              <span>{`🗓  ${result.year}`}</span>
            </S.Title>
          </S.Cover>
        </S.Box>
      </S.Link>
    </S.Result>
  )
}

export default Search
