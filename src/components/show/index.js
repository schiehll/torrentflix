import React, { useState } from 'react'
import usePost from 'hooks/usePost'
import requestCast from 'utils/requestCast'

const Show = ({ show }) => {
  const [selectedSeason, setSelectedSeason] = useState(1)
  const [selectedEpisode, setSelectedEpisode] = useState(1)
  const [quality, setQuality] = useState('NONE')

  const season = show.seasons.find(
    season => season.number.toString() === selectedSeason.toString()
  )
  const episode = season.episodes.find(
    episode => episode.number.toString() === selectedEpisode.toString()
  )

  const magnetLink = episode.torrents.find(
    torrent => torrent.quality === quality
  )

  const { data, loading } = usePost(
    magnetLink ? `${process.env.API_URL}/start` : null,
    { torrentId: magnetLink?.url }
  )

  const handleSeasonChange = e => {
    setSelectedSeason(e.target.value)
    setSelectedEpisode(1)
    setQuality('NONE')
  }

  const handleEpisodeChange = e => {
    setSelectedEpisode(e.target.value)
    setQuality('NONE')
  }

  const handleQualityChange = e => {
    setQuality(e.target.value)
  }

  const cast = () => {
    if (magnetLink && data && data.url && !loading) {
      requestCast(data.url)
    }
  }

  return (
    <div>
      <label>
        Season
        <select value={selectedSeason} onChange={handleSeasonChange}>
          {show.seasons.map(({ number }) => {
            return (
              <option key={number} value={number}>
                {number}
              </option>
            )
          })}
        </select>
      </label>
      <label>
        Episode
        <select value={selectedEpisode} onChange={handleEpisodeChange}>
          {season.episodes.map(({ number }) => {
            return (
              <option key={number} value={number}>
                {number}
              </option>
            )
          })}
        </select>
      </label>
      <label>
        Torrent
        <select value={quality} onChange={handleQualityChange}>
          <option value="NONE">Select one</option>
          {episode.torrents.map((torrent, key) => {
            return (
              <option key={key} value={torrent.quality}>
                {torrent.quality}
              </option>
            )
          })}
        </select>
      </label>
      <pre>{JSON.stringify(episode, null, 2)}</pre>
      {loading && 'loading'}
      <button onClick={cast}>CAST</button>
    </div>
  )
}

export default Show
