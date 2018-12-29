import React, { Fragment, useState, Suspense } from 'react'
import useDebounce from 'hooks/useDebounce'
import Search from 'components/search'
import Loader from 'components/loader'

const Home = () => {
  const [title, setTitle] = useState('')
  const debouncedTitle = useDebounce(title, 1000)

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  return (
    <Fragment>
      <input type="text" value={title} onChange={handleTitleChange} />
      <div>
        {debouncedTitle && (
          <Suspense maxDuration={500} fallback={<Loader />}>
            <Search title={debouncedTitle} />
          </Suspense>
        )}
      </div>
    </Fragment>
  )
}

export default Home
