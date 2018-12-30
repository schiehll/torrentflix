import React, { useState } from 'react'
import usePost from 'hooks/usePost'
import requestCast from 'utils/requestCast'
import Message from 'components/message'
import Loader from 'components/loader'
import Content from 'components/content'
import List from 'components/list'
import Item from 'components/item'
import ItemButton from 'components/item-button'
import { Infos, MultiLineInfos, ComplementaryInfo } from 'components/item-infos'
import theme from 'styles/theme'

const Movie = ({ movie }) => {
  const [torrentInfo, setTorrentInfo] = useState(null)

  const { data, loading } = usePost(
    torrentInfo ? `${process.env.API_URL}/start` : null,
    { torrentId: torrentInfo?.url }
  )

  const handleTorrentInfoChange = link => {
    setTorrentInfo(link)
  }

  const cast = () => {
    if (torrentInfo && data && data.url && !loading) {
      requestCast(data.url)
    }
  }

  return (
    <Content>
      <h2>{`🎬 ${movie.title}`}</h2>
      <p>{movie.synopsis}</p>
      {loading && <Message emoji={<Loader />} text="getting cast link..." />}
      {!loading && (
        <List>
          {movie.torrents.map(torrent => (
            <Item
              onClick={() => handleTorrentInfoChange(torrent)}
              key={`torrent-${torrent.quality}`}
            >
              <MultiLineInfos>
                {torrent.quality}
                <ComplementaryInfo>{torrent.provider}</ComplementaryInfo>
              </MultiLineInfos>
              <span>👉</span>
            </Item>
          ))}
          {data &&
            data.url &&
            torrentInfo && (
              <ItemButton onClick={cast}>
                <span>🤞</span>
                <Infos
                  style={{ marginLeft: `${theme.spacing.base}px` }}
                  dangerouslySetInnerHTML={{
                    __html: `Cast ${movie.title} &middot; ${
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

export default Movie
