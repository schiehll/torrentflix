import React from 'react'

const Show = ({ data }) => {
  const seasons = data.episodes.reduce((seasons, episode) => {
    return {
      ...seasons,
      [episode.season]: (seasons[episode.season] || []).concat(episode)
    }
  }, {})

  return <pre>{JSON.stringify(seasons, null, 2)}</pre>
}

export default Show
