const requestCast = ({ url, subtitle }) => {
  const mediaInfo = new window.chrome.cast.media.MediaInfo(url)

  if (subtitle) {
    const sub = new window.chrome.cast.media.Track(
      1,
      window.chrome.cast.media.TrackType.TEXT
    )

    sub.trackContentId = `${process.env.API_URL}/${subtitle}`
    sub.trackContentType = 'text/vtt'
    sub.subtype = window.chrome.cast.media.TextTrackType.SUBTITLES
    sub.name = 'BR Subtitles'
    sub.language = 'pt-BR'
    sub.customData = null

    mediaInfo.tracks = [sub]
    mediaInfo.activeTrackIds = [1]
  }

  const request = new window.chrome.cast.media.LoadRequest(mediaInfo)

  const context = window.cast.framework.CastContext.getInstance()
  context.requestSession().then(() => {
    const castSession = context.getCurrentSession()
    castSession.loadMedia(request).then(error => {
      if (subtitle && !error) {
        const media = castSession.getMediaSession()
        const activeTrackIds = [1]
        const tracksInfoRequest = new window.chrome.cast.media.EditTracksInfoRequest(
          activeTrackIds
        )
        media.editTracksInfo(tracksInfoRequest)
      }
    })
  })
}

export default requestCast
