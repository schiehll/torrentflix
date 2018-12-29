import { useState, useEffect } from 'react'

const usePost = (url, body) => {
  const [data, setData] = useState(null)
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
            setData(data)
            setLoading(false)
          })
      }
    },
    [url, strBody]
  )

  return { data, loading }
}

export default usePost
