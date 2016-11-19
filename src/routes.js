import App from './components/App'

const loadModule = (cb, module) => {
  return cb(null, module.default)
}

export default {
  path: '/',
  component: App,
  indexRoute: {
    getComponent (nextState, cb) {
      System.import('./components/home')
        .then(module => loadModule(cb, module))
    }
  },
  childRoutes: [
    {
      path: 'about',
      getComponent (nextState, cb) {
        System.import('./components/about')
          .then(module => loadModule(cb, module))
      }
    },
    {
      path: '*',
      getComponent (nextState, cb) {
        System.import('./components/no-match')
          .then(module => loadModule(cb, module))
      }
    }
  ]
}
