import React, { Fragment, useState } from 'react'
import usePost from 'hooks/usePost'
import requestCast from 'utils/requestCast'
import Message from 'components/message'
import Loader from 'components/loader'
import Content from 'components/content'
import List from 'components/list'
import Item from 'components/item'
import ItemButton from 'components/item-button'
import { Infos, MultiLineInfos, ComplementaryInfo } from 'components/item-infos'

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
    if (torrentInfo && data && !loading) {
      requestCast(data)
      setTorrentInfo(null)
    }
  }

  return (
    <Content>
      <h2>{`🎬 ${show.title}`}</h2>
      <p>{show.synopsis}</p>
      {loading && <Message emoji={<Loader />} text="getting cast link..." />}
      {!loading && (
        <List>
          {selectedSeason === null &&
            show.seasons.map(season => (
              <Item
                onClick={() => handleSeasonChange(season)}
                key={season.number}
              >
                <Infos>
                  Season {season.number.padStart(2, '0')}{' '}
                  <ComplementaryInfo>
                    &middot; {season.episodes.length} episodes
                  </ComplementaryInfo>
                </Infos>
                <span>👉</span>
              </Item>
            ))}
          {selectedSeason !== null &&
            !selectedEpisode && (
              <Fragment>
                <ItemButton onClick={() => handleSeasonChange(null)}>
                  <span>👈</span>
                  <Infos>Go back to season selection</Infos>
                </ItemButton>
                {selectedSeason.episodes.map(episode => (
                  <Item
                    onClick={() => handleEpisodeChange(episode)}
                    key={episode.number}
                  >
                    <MultiLineInfos>
                      {episode.title}
                      <ComplementaryInfo>
                        S{selectedSeason.number.padStart(2, '0')}E
                        {episode.number.padStart(2, '0')}
                      </ComplementaryInfo>
                    </MultiLineInfos>
                    <span>👉</span>
                  </Item>
                ))}
              </Fragment>
            )}
          {selectedEpisode && (
            <Fragment>
              <ItemButton onClick={() => handleEpisodeChange(null)}>
                <span>👈</span>
                <Infos>Go back to episode selection</Infos>
              </ItemButton>
              {selectedEpisode.torrents.map(torrent => (
                <Item
                  onClick={() => handleTorrentInfoChange(torrent)}
                  key={torrent.quality}
                >
                  <MultiLineInfos>
                    {torrent.quality}
                    <ComplementaryInfo>{torrent.provider}</ComplementaryInfo>
                  </MultiLineInfos>
                  <span>👉</span>
                </Item>
              ))}
            </Fragment>
          )}
          {data &&
            data.url &&
            torrentInfo && (
              <ItemButton onClick={cast}>
                <span>🤞</span>
                <Infos
                  dangerouslySetInnerHTML={{
                    __html: `Cast S${selectedSeason.number.padStart(
                      2,
                      '0'
                    )}E${selectedEpisode.number.padStart(2, '0')} &middot; ${
                      torrentInfo.quality
                    } &middot; ${torrentInfo.provider}`
                  }}
                />
              </ItemButton>
            )}
        </List>
      )}
    </Content>
  )
}

export default Show
