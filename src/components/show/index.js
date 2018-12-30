import React, { Fragment, useState } from 'react'
import usePost from 'hooks/usePost'
import requestCast from 'utils/requestCast'
import Message from 'components/message'
import Loader from 'components/loader'
import * as S from './styles'

const Show = ({ show }) => {
  const [selectedSeason, setSelectedSeason] = useState(null)
  const [selectedEpisode, setSelectedEpisode] = useState(null)
  const [torrentInfo, setTorrentInfo] = useState(null)

  const { data, loading } = usePost(
    torrentInfo ? `${process.env.API_URL}/start` : null,
    { torrentId: torrentInfo?.url }
  )

  const handleSeasonChange = season => {
    setSelectedSeason(season)
    setSelectedEpisode(null)
    setTorrentInfo(null)
  }

  const handleEpisodeChange = episode => {
    setSelectedEpisode(episode)
    setTorrentInfo(null)
  }

  const handleTorrentInfoChange = link => {
    setTorrentInfo(link)
  }

  const cast = () => {
    if (torrentInfo && data && data.url && !loading) {
      requestCast(data.url)
    }
  }

  return (
    <S.Content>
      <h2>{`🎬 ${show.title}`}</h2>
      <p>{show.synopsis}</p>
      {loading && (
        <Message emoji={<Loader size="big" />} text="getting cast link..." />
      )}
      {!loading && (
        <S.List>
          {selectedSeason === null &&
            show.seasons.map(season => {
              return (
                <S.Item
                  onClick={() => handleSeasonChange(season)}
                  key={`season-${season.number}`}
                >
                  <S.Infos>
                    Season {season.number.padStart(2, '0')}{' '}
                    <span>&middot; {season.episodes.length} episodes</span>
                  </S.Infos>
                  <span>👉</span>
                </S.Item>
              )
            })}
          {selectedSeason !== null &&
            !selectedEpisode && (
              <Fragment>
                <S.ItemButton onClick={() => handleSeasonChange(null)}>
                  <span>👈</span>
                  <S.Infos>Go back to season selection</S.Infos>
                </S.ItemButton>
                {selectedSeason.episodes.map(episode => (
                  <S.Item
                    onClick={() => handleEpisodeChange(episode)}
                    key={`episode-${episode.number}`}
                  >
                    <S.MultiLineInfos>
                      {episode.title}
                      <span>
                        S{selectedSeason.number.padStart(2, '0')}E
                        {episode.number.padStart(2, '0')}
                      </span>
                    </S.MultiLineInfos>
                    <span>👉</span>
                  </S.Item>
                ))}
              </Fragment>
            )}
          {selectedEpisode && (
            <Fragment>
              <S.ItemButton onClick={() => handleEpisodeChange(null)}>
                <span>👈</span>
                <S.Infos>Go back to episode selection</S.Infos>
              </S.ItemButton>
              {selectedEpisode.torrents.map(torrent => (
                <S.Item
                  onClick={() => handleTorrentInfoChange(torrent)}
                  key={`torrent-${torrent.quality}`}
                >
                  <S.MultiLineInfos>
                    {torrent.quality}
                    <span>{torrent.provider}</span>
                  </S.MultiLineInfos>
                  <span>👉</span>
                </S.Item>
              ))}
            </Fragment>
          )}
          {data &&
            data.url &&
            torrentInfo && (
              <S.ItemButton onClick={cast}>
                <span>🤞</span>
                <S.Infos
                  dangerouslySetInnerHTML={{
                    __html: `Cast S${selectedSeason.number.padStart(
                      2,
                      '0'
                    )}E${selectedEpisode.number.padStart(2, '0')} &middot; ${
                      torrentInfo.quality
                    } &middot; ${torrentInfo.provider}`
                  }}
                />
              </S.ItemButton>
            )}
        </S.List>
      )}
    </S.Content>
  )
}

export default Show
