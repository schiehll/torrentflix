const requestCast = url => {
  const mediaInfo = new window.chrome.cast.media.MediaInfo(url)
  const request = new window.chrome.cast.media.LoadRequest(mediaInfo)

  const context = window.cast.framework.CastContext.getInstance()
  context.requestSession().then(() => {
    const castSession = context.getCurrentSession()
    castSession.loadMedia(request)
  })
}

export default requestCast
