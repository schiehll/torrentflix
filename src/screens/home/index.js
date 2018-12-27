import React, { Fragment, useState, Suspense } from 'react'
import useDebounce from 'hooks/useDebounce'
import OMDB from 'components/omdb'
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
          <Suspense delay={250} fallback={<Loader />}>
            <OMDB title={debouncedTitle} />
          </Suspense>
        )}
      </div>
    </Fragment>
  )
}

export default Home
