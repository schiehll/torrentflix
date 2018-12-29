import React, { useState } from 'react'

const Show = ({ data }) => {
  const [selectedSeason, setSelectedSeason] = useState(1)
  const [selectedEpisode, setSelectedEpisode] = useState(1)
  const [torrentUrl, setTorrentUrl] = useState('')
  console.log('torrentUrl', torrentUrl)

  const handleSeasonChange = e => {
    setSelectedSeason(e.target.value)
    setSelectedEpisode(1)
    setTorrentUrl('')
  }

  const handleEpisodeChange = e => {
    setSelectedEpisode(e.target.value)
  }

  const handleTorrentChange = e => {
    setTorrentUrl(e.target.value)
  }

  const requestCast = e => {
    const sessionRequest = new window.chrome.cast.SessionRequest(
      window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
    )

    window.chrome.cast.requestSession(
      function success(session) {
        console.log('Session success', session)
        const mediaInfo = new window.chrome.cast.media.MediaInfo(
          'http://192.168.0.19:3001/0/4bac3b4d4d4ac463ca50d427973e84db0b91be26/Brooklyn.Nine-Nine.S05E01.PROPER.720p.HDTV.x264-BATV%5Beztv%5D.mkv'
        )
        const request = new window.chrome.cast.media.LoadRequest(mediaInfo)
        session.loadMedia(
          request,
          function() {
            console.log('Load succeed')
          },
          function(errorCode) {
            console.log('Error code: ' + errorCode)
          }
        )
      },
      function fail(err) {
        console.log('onLaunchError', err)
      },
      sessionRequest
    )
  }

  const season = data.seasons.find(
    season => season.id.toString() === selectedSeason.toString()
  )
  const episode = season.episodes.find(
    episode => episode.id.toString() === selectedEpisode.toString()
  )

  return (
    <div>
      <label>
        Season
        <select value={selectedSeason} onChange={handleSeasonChange}>
          {data.seasons.map(({ id }) => {
            return (
              <option key={id} value={id}>
                {id}
              </option>
            )
          })}
        </select>
      </label>
      <label>
        Episode
        <select value={selectedEpisode} onChange={handleEpisodeChange}>
          {season.episodes.map(({ id }) => {
            return (
              <option key={id} value={id}>
                {id}
              </option>
            )
          })}
        </select>
      </label>
      <label>
        Torrent
        <select onChange={handleTorrentChange}>
          <option value="">Select one</option>
          {episode.torrents.map((torrent, key) => {
            return (
              <option key={key} value={torrent.url}>
                {torrent.quality}
              </option>
            )
          })}
        </select>
      </label>
      <pre>{JSON.stringify(episode, null, 2)}</pre>
      <button onClick={requestCast}>Cast</button>
    </div>
  )
}

export default Show
