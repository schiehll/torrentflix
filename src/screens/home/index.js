import React, { Fragment, useState, useEffect, Suspense } from 'react'
import useDebounce from 'hooks/useDebounce'
import Search from 'components/search'
import Loader from 'components/loader'
import Message from 'components/message'
import Logo from 'components/logo'
import { PATHS, screenRoutes } from 'routes'
import * as S from './styles'

const detailsScreen = screenRoutes.find(
  screenRoute => screenRoute.path === PATHS.DETAILS
)

const Home = () => {
  const [title, setTitle] = useState('')
  const debouncedTitle = useDebounce(title, 1000)

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(
    () => {
      if (debouncedTitle && detailsScreen) {
        detailsScreen.component.preload()
      }
    },
    [debouncedTitle]
  )

  return (
    <Fragment>
      <Logo />
      <S.SearchInput
        type="text"
        placeholder="search..."
        value={title}
        onChange={handleTitleChange}
      />
      {debouncedTitle ? (
        <Suspense
          maxDuration={500}
          fallback={<Message emoji={<Loader />} text="loading..." />}
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
