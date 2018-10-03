import express from 'express'
import path from 'path'

const PORT = process.env.PORT || 3000
const app = express()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const config = require('../../webpack/webpack.dev.js')
  const compiler = webpack(config)

  app.use(
    webpackDevMiddleware(compiler, { ...config.devServer, writeToDisk: true })
  )
  app.use(require('webpack-hot-middleware')(compiler))
}

app.use(express.static(path.resolve(__dirname, '../../dist/client')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/client/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is up in port ${PORT}`)
})
