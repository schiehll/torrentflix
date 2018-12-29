const requestCast = url => {
  const sessionRequest = new window.chrome.cast.SessionRequest(
    window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
  )

  window.chrome.cast.requestSession(
    function success(session) {
      console.log('Session success', session)
      const mediaInfo = new window.chrome.cast.media.MediaInfo(url)
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

export default requestCast
