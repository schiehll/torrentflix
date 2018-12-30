import React, { Fragment, useState, Suspense } from 'react'
import useDebounce from 'hooks/useDebounce'
import Search from 'components/search'
import Loader from 'components/loader'
import Message from 'components/message'
import * as S from './styles'

const Home = () => {
  const [title, setTitle] = useState('')
  const debouncedTitle = useDebounce(title, 1000)

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  return (
    <Fragment>
      <S.Title>
        <span>🍿</span> torrentflix
      </S.Title>
      <S.SearchInput
        type="text"
        placeholder="search..."
        value={title}
        onChange={handleTitleChange}
      />
      {debouncedTitle ? (
        <Suspense
          maxDuration={500}
          fallback={<Message emoji={<Loader size="big" />} text="loading..." />}
        >
          <Search title={debouncedTitle} />
        </Suspense>
      ) : (
        <Message
          emoji="☝️"
          text={
            <span>
              try to search <br /> for something, up there
            </span>
          }
        />
      )}
    </Fragment>
  )
}

export default Home
