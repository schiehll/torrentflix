import { useState, useEffect } from 'react'

const usePost = (url, body) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const strBody = JSON.stringify(body)

  useEffect(
    () => {
      if (url) {
        setLoading(true)
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: strBody
        })
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              throw new Error(data.error)
            }

            setData(data)
            setLoading(false)
            setError(null)
          })
          .catch(err => {
            setError(err.message)
            setData(null)
            setLoading(false)
          })
      }
    },
    [url, strBody]
  )

  return { data, loading, error }
}

export default usePost
