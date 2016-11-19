const chalk = require('chalk')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const historyApiFallback = require('connect-history-api-fallback')
const clearConsole = require('react-dev-utils/clearConsole')
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages')
const openBrowser = require('react-dev-utils/openBrowser')
const config = require('../config/webpack.config.babel')
const paths = require('../config/paths')

const DEFAULT_PORT = process.env.PORT || 3000
let compiler

const setupCompiler = (host, port, protocol) => {
  compiler = webpack(config)
  // "invalid" event fires when you have changed a file, and Webpack is
  // recompiling a bundle. WebpackDevServer takes care to pause serving the
  // bundle, so if you refresh, it'll wait instead of serving the old one.
  // "invalid" is short for "bundle invalidated", it doesn't imply any errors.
  compiler.plugin('invalid', () => {
    clearConsole()
    console.log('Compiling...')
  })
  // "done" event fires when Webpack has finished recompiling the bundle.
  // Whether or not you have warnings or errors, you will get this event.
  compiler.plugin('done', stats => {
    clearConsole()
    // We have switched off the default Webpack output in WebpackDevServer
    // options so we are going to "massage" the warnings and errors and present
    // them in a readable focused way.
    const messages = formatWebpackMessages(stats.toJson({}, true))
    if (!messages.errors.length && !messages.warnings.length) {
      console.log(chalk.green('Compiled successfully!'))
      console.log()
      console.log('The app is running at:')
      console.log()
      console.log('  ' + chalk.cyan(protocol + '://' + host + ':' + port + '/'))
    }

    // If errors exist, only show errors.
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'))
      console.log()
      messages.errors.forEach(message => {
        console.log(message)
        console.log()
      })
      return
    }

    // Show warnings if no errors were found.
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'))
      console.log()
      messages.warnings.forEach(message => {
        console.log(message)
        console.log()
      })
    }
  })
}

const addMiddleware = devServer => {
  devServer.use(historyApiFallback({
    disableDotRule: true,
    htmlAcceptHeaders: ['text/html', '*/*']
  }))

  devServer.use(devServer.middleware)
}

const runDevServer = (host, port, protocol) => {
  const devServer = new WebpackDevServer(compiler, {
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    contentBase: paths.appPublic,
    hot: true,
    publicPath: config.output.publicPath,
    // WebpackDevServer is noisy by default so we emit custom message instead
    // by listening to the compiler events with `compiler.plugin` calls above.
    quiet: true,
    // Reportedly, this avoids CPU overload on some systems.
    watchOptions: {
      ignored: /node_modules/
    },
    host: host
  })

  addMiddleware(devServer)

  // Launch WebpackDevServer.
  devServer.listen(port, (err, result) => {
    if (err) {
      return console.log(err)
    }

    clearConsole()
    console.log(chalk.cyan('Starting the development server...'))
    console.log()
    openBrowser(protocol + '://' + host + ':' + port + '/')
  })
}

const run = () => {
  const host = process.env.HOST || 'localhost'
  const protocol = 'http'

  setupCompiler(host, DEFAULT_PORT, protocol)
  runDevServer(host, DEFAULT_PORT, protocol)
}

run()
