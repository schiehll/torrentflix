const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge.strategy({ entry: 'prepend' })(config, {
  mode: 'development',
  devtool: 'source-map',

  devServer: {
    compress: true,
    historyApiFallback: true,
    stats: {
      modules: false,
      children: false,
      colors: true
    }
  }
})
