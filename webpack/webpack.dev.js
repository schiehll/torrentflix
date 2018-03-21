const merge = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge(config, {
  devServer: {
    port: 3000,
    compress: true,
    historyApiFallback: true,
    stats: {
      modules: false,
      children: false
    }
  }
})
