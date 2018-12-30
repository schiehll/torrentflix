import React from 'react'
import { createRoot } from 'react-dom'
import App from './App'

window.__onGCastApiAvailable = isAvailable => {
  if (isAvailable) {
    const context = window.cast.framework.CastContext.getInstance()
    context.setOptions({
      receiverApplicationId:
        window.chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
    })

    context.addEventListener(
      window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED,
      async event => {
        switch (event.sessionState) {
          case window.cast.framework.SessionState.SESSION_STARTED:
          case window.cast.framework.SessionState.SESSION_RESUMED: {
            break
          }
          case window.cast.framework.SessionState.SESSION_ENDED: {
            await fetch(`${process.env.API_URL}/finish`)
            break
          }
        }
      }
    )
  }
}

const root = createRoot(document.getElementById('root'))

const render = Component => {
  root.render(<App />)
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}
