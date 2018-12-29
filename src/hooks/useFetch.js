import { useState, useEffect } from 'react'

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(
    () => {
      if (url) {
        setLoading(true)
        fetch(url, options)
          .then(res => res.json())
          .then(data => {
            setData(data)
            setLoading(false)
          })
      }
    },
    [url]
  )

  return { data, loading }
}

export default useFetch
