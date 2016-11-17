import App from './components/App'

export default {
  path: '/',
  component: App,
  indexRoute: {
    getComponent (nextState, callback) {
      require.ensure([], require => {
        callback(null, require('./components/home').default)
      })
    }
  },
  childRoutes: [
    {
      path: 'about',
      getComponent (nextState, callback) {
        require.ensure([], require => {
          callback(null, require('./components/about').default)
        })
      }
    },
    {
      path: '*',
      getComponent (nextState, callback) {
        require.ensure([], require => {
          callback(null, require('./components/no-match').default)
        })
      }
    }
  ]
}
